import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns'
const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';
const DATE_FORMAT = 'yyyy-mm-dd';

export function formatToDateTime(date: null, formatStr = DATE_TIME_FORMAT){
  return format(date, formatStr);
}
export function formatDate(timestamp) {
  return formatDistanceToNow(new Date(timestamp))
}
export function formatToDate(date: null, formatStr = DATE_FORMAT): string {
  return format(date, formatStr);
}
