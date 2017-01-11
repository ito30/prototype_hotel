struct PhoneType {
  1: i32 id,
  2: string name
}

struct Phone {
  1: i32    id,
  2: string number,
  3: PhoneType type
}
        
struct Person {
  1: i32    id,
  2: string firstName,
  3: string lastName,
  4: string email,
  5: list<Phone> phones
}

struct Course {
  1: i32    id,
  2: string number,
  3: string name,
  4: Person instructor,
  5: string roomNumber,
  6: list<Person> students
}