export default function validateInput(value: string) {
  const regex = /^[a-zA-Z]{3,}$/;
  if (regex.test(value)) {
    return true;
  }
  return false;
}
