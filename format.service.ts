class FormatService {
  // string => string
  mobileFormat(mobileNo: string): string {
      return `[TODO]`;
  }
}

// 0891234567 => 089-123-4567
const formatService = new FormatService()
console.log(formatService.mobileFormat('0891234567'))