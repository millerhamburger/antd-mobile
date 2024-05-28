const getBasicColumns = () => {
  const hours = []
  const minutes = []
  const seconds = []
  for (let i = 0; i < 24; i++) {
    hours.push(i.toString().padStart(2, '0'))
  }
  for (let i = 0; i < 60; i++) {
    minutes.push(i.toString().padStart(2, '0'))
    seconds.push(i.toString().padStart(2, '0'))
  }
  return [hours, minutes, seconds]
}

export default getBasicColumns()
