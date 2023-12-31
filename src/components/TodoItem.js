import React from "react";
import { Col, Row } from "react-bootstrap";

const TodoItem = ({item, deleteTask, isCompleteTask}) => {
  return (
    <Row>
      <Col xs={12}>
        <div className={item.isComplete === false? 'todo-item' : 'todo-item item-complete'}>
          <div className="todo-content">{item.task}</div>

          <div>
            <button className="button-delete" onClick={()=>deleteTask(item._id)}>삭제</button>
            <button className="button-delete" onClick={()=>isCompleteTask(item._id)}>끝남</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoItem;
