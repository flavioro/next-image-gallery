export default function WordsUpperCase(string) {
  const stringNew = string.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()
  )

  return stringNew
}