class Common {

  public static sumPositiveNumber(first: number, second: number) {
    if (first < 0 || second < 0) { return null }
    return first + second;
  }
}

export default Common;