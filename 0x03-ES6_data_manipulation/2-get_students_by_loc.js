export default function getStudentsByLocation(students, locations) {
  return students.filter((items) => items.location === locations);
}
