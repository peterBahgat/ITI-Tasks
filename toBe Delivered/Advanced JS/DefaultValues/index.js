function getCourseInfo(course) {
  let defaultValues = {
    id: 'default id',
    name: 'default course name',
    instructor: 'default instructor',
    duration: 'default hours',
  };
  Object.assign(defaultValues, course);
  return defaultValues;
}

let result = getCourseInfo({ id: 1, duration: '5 hours' });
console.log(result);
