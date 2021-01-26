export class Customer {
  constructor(data = {}) {
    Object.assign(this, data)
  }

  id = null
  name = null
  firstName = null
  lastName = null
  email = null
  phoneNumber = null
  country = null
  province = null
  city = null
  zipCode = null
  street = null
  streetNr = null

  get fullName() {
    if (name) {
      // Company
      return name
    } else {
      // Private person
      const { firstName, lastName } = this
      if (firstName && lastName) {
        return `${firstName} ${lastName}`
      } else {
        return lastName || firstName
      }
    }
  }

  clone() {
    const data = JSON.parse(JSON.stringify(this))
    return new Customer(data)
  }
}
