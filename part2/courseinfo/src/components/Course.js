const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  console.log(totalExercises);

  

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <p>Total of {totalExercises} exercises</p>
    </div>
  );
};

export default Course;
