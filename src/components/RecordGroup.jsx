import React from "react";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

function RecordGroup({ records, removeRecord }) {
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record
          removeRecord={removeRecord}
          key={record.id}
          index={index}
          record={record}
        />
      ))}
    </>
  );
}

export default RecordGroup;
