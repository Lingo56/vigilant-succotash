const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <p>
        <b>The total exercises is {total}</b>
      </p>
    </div>
  );
};

export default Total;
