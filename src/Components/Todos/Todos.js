import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllTodos from "../../Service/Actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  console.log(isLoading);
  console.log(error?.message);
  return (
    <div>
      <h2>Welcome Todos Section</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {/* <div>
        {todos.map((todo) => (
          <h3>{todo.title}</h3>
        ))}
      </div> */}
    </div>
  );
};

export default Todos;
