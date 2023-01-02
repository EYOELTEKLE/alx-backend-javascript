export default function getStudentIdsSum(students) {
  const sum = students.reduce((prev, curr) => prev + curr.id, 0);
  return sum;
}
