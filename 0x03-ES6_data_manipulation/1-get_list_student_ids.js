export default function getListStudentIds(param) {
  if (Array.isArray(param) === false) return [];
  const objs = param;
  return objs.map((item) => item.id);
}
