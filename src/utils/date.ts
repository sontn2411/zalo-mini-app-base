import { parse } from 'date-fns'

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

export function formatDateDDMMYY(dateStr: string): string {
  if (!dateStr) return ''

  const [year, month, day] = dateStr.split('-')
  return `${day}/${month}/${year.slice(-2)}`
}

export function formatDateRangerWithDash(value: string): string {
  const [startDate, endDate] = value.split('|')

  return formatDateDDMMYY(startDate) + '-' + formatDateDDMMYY(endDate)
}

export function parseDateRangeInput(value: string) {
  if (!value) return { startDate: new Date(), endDate: new Date() }

  const [start, end] = value.split('-').map((v) => v.trim())

  const parseToDate = (dateStr: string) => {
    return parse(dateStr, 'd/MM/yy', new Date())
  }

  return {
    startDate: parseToDate(start),
    endDate: parseToDate(end),
  }
}
