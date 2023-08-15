// ------------  //
// ჯავასკრიპტს ჭირდება გარემო სადაც გაეშვება კოდი. ნოდუის დახმარებით  ჩვენი კოდი
// შეგვიძლია გავუშვათ ბრაუზერში. (ჯავასკრიპტს ასევე ეძახიან runTime code).
// ქრომში არის ჩაშენებულოი V8, fireFox-ში spiderMonkey, safati-ში webkit.
// ჯავასკრიპტი აპლიკაციებს ქმნის დინამიურს, გვაძლევს საშვალებებს რომ ასინქრონულად ვაგზავნოთ
// რექვესთები. ჯავასრიპტი არის ერთი ჩვეულებრი ტექსტური ფაილი და მას ჭირდება გარემო სადაც
// გავუშვებთ ჩვენ კოდს.
//------------ //
//ცვლადის დახმარებით შეგვიძლია შევინახოთ ან წავიკითხოთ ინფორმაცია.
// გვაქვს სულ 8 მონაცემთა ტიპი აქედან 7 არის პრიმიტივი და 1 არა პრიმიტივი
// const PRIMITIVE = ["Boolean", "Null", "Undefined", "Number", "BigInt", "String", "Symbol"];
// const userOne = new Object(); // ObjectConstructor syntax
// const userTwo = {}; // ObjectLiteral syntax
//------------ //
// კომპიუტერის მეხსიერება იყოფა 2 ნაწილად STACK და HEAP
// პრიმიტივები ინახებიან STACK-ში
// ობიექტების შემთხვევაში ჯავასკრიპტის ენჟინი ობიექტის სახელს შეინახავს სტეკში და გამოყოფს ადრეს
// რომლის ველიუები შეინახებიან HEAP-ში
// Array.pop() // ბოლოში შლის
// Array.shift() // თავში შლის
// Array.push() // ბოლოში ამატებს
// Array.unshift() თავში ამატებს
// == ადარებს მნიშვნელობებს,  === ადარებს მნიშვნელობებს და მონაცემთა ტიპებს
// for in გამოიყენება ობიექტებზე , for of გამოიყენება მასივებზე
// ფუნქციები ჯავასკრიპტში არიან ველიუები და სხვა ფუნქციას შეგვიძლია პარამეტრად გადავცეთ!!!
// function myFunc (message) {} // function declaration
//const myFunc = function (message) {} // function exspretion
// const myFunc = message => return: message; // arrow function
//----------------- //
// ჯავასკირპტი იყენებს ლექსიქალ სქოუფს. ლექსიკალ სქოუფს უწოდებენ იმას თუ  რა
// ზონაშიც არის გამოცხადებული  ცვლადი
//ფრჩხილეგში შემოსაზღვრულ ადგილს ქვია ბლოქსქოუფი
//let და const არიან ბლოკ სქოუფები. ვარი აღწევს თავს ბლოქ სქოუფიდან მაგრამ,
// ვერ ცდება function სქოუფს
// var-თ გამოცხადებული ცვლადის რედეკლარირება შესაძლებელია ხოლო let-თ არა!!!
// splice() მეთოდი ცვლის მასივს slice() არ ცვლის მასივს
//მასივების გადაკოპირების 3 ხერხი არსებობს
//arr.slice() | [].concat(arr) | [...arr]
// სამივე მეთოდის დროს გადაკოპირების შემთხვევაში მასივის ადრესები ერთი და იგივე არაა !!!
//-------------- //
// მომხმარებელი როდესაც გააგზავნის რექვესთს და დაუბრუნდება რისფონსი ამის შემდეგ უკვე როცა
// ბრაუზერში ჩაიტვირთება ფაილები, HTML თაგები გადაიქცევა ობჯექთებად და იქმნება,
// Document object model, შემდეგ იქნმნება Css object model და აქ ბრაუზერი თვლის სად რა და
// რამდენი უნდა დაიხატოს Css არის Render blocking, ამის შემდეგ იქმნება Render Tree და აქ
//მოხვდებიან ის ელემენტები რომელიც უკვე უნდა დაიხატოს, შემდეგ ხდება Layout(Reflow)
// და ბოლოს ხდება უკვე paint.
//defer script-ები ერთმანეთს ელოდებიან და თანმიმდევრობით ეშვებიან როდესაც dom content
// loading ჩაიტვირტება მაგრამ სანამ გაეშვება
//async script-ები ერტმანეთს არ ელოდებიან და არც dom content load-საც არ ელოდებია
//--------------- //
//ჯავასკრიპტი როდესაც ეშვება ბრაუზერში, ბრაუზერი გვაძლევს გლობალ ობჯექტს რომელსაც
//ქვია ვინდოუ ობჯექთი.
// ცვლადები რომლებიც არიან var-ით გამოცხადებულები, ჩაიწერებიან ვინდოუ ობჯექთში
//---------------- //
// this ყოველთვის მიუთითებს ობჯეცთს. როგორ დავწერთ ჩვენ this keyword-ს იმის მიხედვით
// განსაზღვრავს, რას მიუთითებს this keyword.
// რის შემდეგაც დაიწერება this keyword ყოველთვის ეჭირება იმ ობიექტის რეფერენსი
//ფუნქცია რომელიც განმaრტებულია ობიექტში ასეთ ფუნქციას ქვია მეთოდი
// applay და call მეთოდები გამოიყენება იმ შემთხვევაში როდესაც გვჭირდება this
// განვმარტოთ სხვა ობიექტისთვის. applay მეთოდი მეორე პარამეტრად იღებს მასივს
// ასინქრონულობა ჯავასკრიპტის feature-ი არ არის, ასინქრონული კოდის დამუშავებაში
// ჯავასკრიპტს ბრაუზერი ეხმარება
// --------------- //
//AJAX - async javascript and XML
// XML აირს ერთ ერთი ფორმატი როგორ შეიძლება გავცვალოთ ინფორმაცია
// XML აირს ძველი ფორმატი რომელიც გავს HTML. რა ინფორმაციის გაცვალაც გინდა
// JSON javascript object notation
// რომელიც არის ახალი ფორმატი შედარებით XML-თან და უფრო მოსახერხებელი ვიდრე XML
// javascript object რომ გადავიყვანოთ JSON ში ან პირიქით ამისთვის არსებობს ჩაშენებული ფუნქვიები
// JSON.parse() გადაყავს javascript object-ში
// JSON.stringify() გადაყავს JSON-ის ფორმატში
// HTTP protocol ინფორმაციის გაცვლა ბექსა და ფრონტს შორის
// უნდა გავაგზავნოთ რექვესთი და დაგვიბრუნდება რესფონსს რომელსაც მოყვება სტატუსკოდი
// 200 status code არის წარმატებული 400 status code არის შეცდომა
// ჯავასკრიპტზე რომ გავაგზავნოთ და მივიღოდ იმფორმაცია ამისთვის არის fetch მეთოდი
// fetch მეთდი აბრუნებს ფრომისს რომელსაც ჭირდება გახსნა
// try catch და then catch შორის განსხვავება ისაა რომ try catch იჭერს სინქრონულ ერორებს!!
// ------------------ //
// ობიექტზე ორიენტირებული პროგრამირება არის ერთერთი მიდგომა თუ როგორ შეიძლება დავწეროთ
// ჩვენი აპლიკაციები და მთავარ როლს აქ თამაშობს ობიქეტი, რომელიც სამომავლოდ მარტივს
// ხდის ჩვენს აპლიკაციას როდესაც ის ზომაში გაიზრდება.
// ობიექტზე ორიენტირებულ პროგრამირებას გააჩნია 4 ძირითადი პრინციპი
// Encapsulation | Inheritance | Abstraction |  Polymorphism
// Encapsulatioh არის მიდგომა როდესაც ობიექტს რაც ახასიათებს ყველფრერი ერთად არის
// თავმოყრილი. ამის დახმარებით როდესაც ჩვენი კოდი არის ფართო მაშტაბიან მოხმარებადი
// set და get მეთოდიდ შეიძლება შენს კოდთან წვდომა თუმცა რაღაცეები რაც არ უნდა შეიცვალოს
// ასეთ რაღაცეებთან წვდომა არ ექნებათ.
// Abstraction  არის როდესაც უკან ბექგრაუნდზე ხდება პროცესი და ეს მთლიანი flow არ უჩანს მოხმარებელს
// Inherintance არის როდესაც კლასები რომლებსაც საერთო აქვს შეიძლება ეს ზედა კლასში გაიტანო და
// მემკვიდრეობით მიანიჭო იმ კლასებს რომელსაც ერთნაირი ფუნქცია აქვს შესასრულებელი
// Polymorphism ----------
// ---------- //
// REACT //
//------------ //
// კომპილატორი არის პროგრამა რომელსაც მივცემთ ჩვენ კოდს და გადათარგმნის მანქანის გასაგებ ენაზე
// კოპიუტერს ესმის ბაინარი და ორობითი რაც არის ნოლები და ერთები.
// თრანსფაილერი/ბაბელი არის თული რომელიც ერთი სახის სორს კოდს თარგმნის მეორე სახის სორს კოდში
//------- //
// useState არ არის ცვლადი ის ასახავს ჩვენი აპლიკაციის მდგომარეობას.
// ყოველი სთეითის შეცვლის დროს რენდერდება აპლიკაცია.
//useEffect არის ადგილი სადაც უნდა დაიწეროს sideEffect.
//useEffect მეორე პარამეტრს თუ არ გადავცემთ ის ყოველი გადარენდერების დროს გაეშვება.
//useEffect-ში თუ არის გამოყენებული სთეითი მეორე პარამეტრად დიფენდენსი ერეიში,
// უნდა გადავცეთ ის სთეითი რაც არის გამოყენებული useEffectში.
// useEffect გააჩნია ქლინაფ ფუნქცია რომელიც ეშვება ანმაუნთის დროს და შემდეგ useEffectმდე
//useRef შეგვიძლია შევინახოთ დომის ელემენტი რომელიც აბრუნებს current.
// useRef გამოიყენება რენდერიდან რენდერამდე ინფორმაციის შესანახად .
//
