export const isEmailValid = (email: string): boolean => {
  const tester = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return tester.test(email)
}
