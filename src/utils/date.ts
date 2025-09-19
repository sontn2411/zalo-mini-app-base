export function formatDateYYMMDD(value: string): string {
  const [day, month, year] = value.split('/').map(Number)

  const mm = String(month).padStart(2, '0')
  const dd = String(day).padStart(2, '0')

  return `${year}-${mm}-${dd}`
}

export function formatDateRangerYYMMDD(value: string): string {
  const [startDate, endDate] = value.split('-')

  return formatDateYYMMDD(startDate) + '|' + formatDateYYMMDD(endDate)
}
