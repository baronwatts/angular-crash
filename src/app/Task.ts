//export so we can bring ti into other files
//? means optional so you don't get any error messages. id is not going to have an actual id until we save it into the JSON server
// : defines the type. string, number, [] arrays, objects, boolean ect.
//interface specify the behavior of a particular data type but not concerned about who implements its behavior ( multiple inheritances)

export interface Task{
	id?: number;
	text: string;
	day: string;
	reminder: boolean;
}