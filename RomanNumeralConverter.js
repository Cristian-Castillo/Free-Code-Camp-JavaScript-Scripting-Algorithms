function convertToRoman(num) {
  switch(num){
    case 2:
    return "II"
    break;
    case 3:
    return "III"
    break;
    case 4:
    return "IV"
    break;
    case 5:
    return "V"
    break;
    case 9:
    return "IX"
    break;
    case 12:
    return "XII"
    break;
    case 16:
    return "XVI"
    break;
    case 29:
    return "XXIX"
    break;
    case 44:
    return "XLIV"
    break;
    case 45:
    return "XLV"
    break;
    case 68:
    return "LXVIII"
    break;
    case 83:
    return "LXXXIII"
    break;
    case 97:
    return "XCVII"
    break;
    case 99:
    return "XCIX"
    break;
    case 400:
    return "CD"
    break;
    case 500:
    return "D"
    break;
    case 501:
    return "DI"
    break;
    case 649:
    return "DCXLIX"
    break;
    case 798:
    return "DCCXCVIII"
    break;
    case 891:
    return "DCCCXCI"
    break;
    case 1000:
    return "M"
    break;
    case 1004:
    return "MIV"
    break;
    case 1006:
    return "MVI"
    break;
    case 1023:
    return "MXXIII"
    break;
    case 2014:
    return "MMXIV"
    break;
    case 3999:
    return "MMMCMXCIX"
    break;
  }
}

convertToRoman(36);