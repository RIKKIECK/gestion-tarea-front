import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";
import {
    // eslint-disable-next-line no-unused-vars
    Button,
    Col,
    Container,
     // eslint-disable-next-line no-unused-vars
    Table,
    Row
  } from "react-bootstrap";

const TaskList = () => {
  const url = 'http://localhost:7070/api/tasks/';
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [creationDate, setCreationDate] = useState('');
  const [active, setActive] = useState(false);
  const [operation, setOperation] = useState(1);

  const resetFields = () => {
    setId('');
    setDescription('');
    setOperation(1);
    setCreationDate('');
    setActive(false);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setTasks(response.data);
    } catch (error) {
      console.error();
    }
  };

  const createTask = async () => {
    try {
      const newTask = {
        id,
        description,
        creationDate,
        active,
      };
      let response = await axios.post(url, newTask);
      resetFields();
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async () => {
    try {
      const updatedTask = {
        id,
        description,
        creationDate,
        active,
      };
      let response = await axios.put(`${url}${id}`, updatedTask);
      resetFields();
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const confirmed = window.confirm('¿Estás seguro de eliminar esta tarea?');
      if (confirmed) {
        await axios.delete(`${url}${taskId}`);
        fetchData(); // Actualizar los datos después de eliminar la tarea
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="app" fluid="md">
    <Row>
      <Col>
    <div>
      <h1>CRUD de Tareas</h1>
      <div className="row">
        <div className="col">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="col" >
          <label htmlFor="active">Activa:</label>
          <input
            type="checkbox"
            id="active"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            className="form-check-input"
          />
        </div>
      </div>
      <div className="mt-3">
        <button onClick={operation === 1 ? createTask : updateTask} className="btn btn-primary me-2">
          {operation === 1 ? 'Crear Tarea' : 'Actualizar'}
        </button>
        <button onClick={resetFields} className="btn btn-secondary">
          Limpiar
        </button>
      </div>

      <h2>Lista de Tareas</h2>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Fecha de Creación</th>
            <th>Activa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.description}</td>
              <td>{task.creationDate}</td>
              <td>{task.active ? 'Sí' : 'No'}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                  Eliminar
                </button>
                <button className="btn btn-primary ms-2" onClick={() => {
                    setId(task.id);
                    setDescription(task.description);
                    setCreationDate(task.creationDate);
                    setActive(task.active);
                    setOperation(2);
                  }}>
                  Actualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Col>
      </Row>
    </Container>
  );
};

export default TaskList;