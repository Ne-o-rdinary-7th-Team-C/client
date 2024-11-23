export const $Routes = {
  landing: () => "/",
  login: () => "/login",
  // 로그인 화면, 어드밴트 캘린더 생성은 알아서 퍼널로 처리할게요
  signUp: () => "/sign-up",
  calendarCreate: () => "/calendar/create",
  calendar: () => "/calendar",
  qna: (date: string) => `/calendar/${date}`,

  userCalendar: (userId: string) => `/calendar-view/${userId}`,
  selectDate: (userId: string) => `/select/${userId}`,
  question: (userId: string) => `/question/${userId}`,
  answer: (userId: string, date: string) => `/calendar-view/${userId}/${date}`,
  complete: (userId: string) => `/complete/${userId}`,
};
