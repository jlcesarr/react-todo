// import {} from 'styles.js'
import React, { useState, useEffect, useRef } from "react";
import Modal from "../Modal";
import dateHelper from "../../helpers/date";
import { Log, ClearLogsButton } from "./styles";
import propTypes from "prop-types";

function Changelog(props) {
  const [logs, setLogs] = useState(
    JSON.parse(localStorage.getItem("logs")) || []
  );
  const [visible, setVisible] = useState(props.showModal);

  const render = useRef(true);

  if (!localStorage.getItem("logs")) {
    localStorage.setItem("logs", JSON.stringify([]));
  }

  function handleCloseChangelog() {
    setVisible(false);
  }

  useEffect(() => {
    let isFirstRender = render.current;
    if (isFirstRender) {
      render.current = false;
      return;
    }

    setVisible((isVisible) => !isVisible);
  }, [props.showModal]);

  useEffect(() => {
    setLogs(JSON.parse(localStorage.getItem("logs")));
  }, [visible]);

  function handleClearLogs() {
    localStorage.setItem("logs", JSON.stringify([]));

    setLogs([]);
  }

  return (
    <>
      {visible ? (
        <Modal onCloseModal={handleCloseChangelog} title="Changelog">
          {logs.map((log) => {
            return (
              <Log key={log.id} action={log.action}>
                {log.id} - <span>{log.action}</span> Task {log.taskId} /{" "}
                {dateHelper.parseDate(log.created_at).fromNow()} (
                {dateHelper.formatDate(log.created_at, "YYYY-MM-DD HH:mm:ss")})
              </Log>
            );
          })}

          <ClearLogsButton onClick={handleClearLogs}>Clear</ClearLogsButton>
        </Modal>
      ) : (
        false
      )}
    </>
  );
}

Changelog.propTypes = {
  showModal: propTypes.bool.isRequired,
};

export default Changelog;
