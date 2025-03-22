interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];

}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/user",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: "/about",
		has_dropdown: false,
	},
	// {
	// 	id: 3,
	// 	title: "Services",
	// 	link: "/services",
	// 	has_dropdown: false,
	// },
	// {
	// 	id: 4,
	// 	title: "Contact",
	// 	link: "/contact",
	// 	has_dropdown: false,
	// },
];


// export  const  URL = 'http://localhost:3000' 
export  const  URL = 'https://portolio-maker-vekx.vercel.app' 


type DemoNavType = {
	id:number,
	title:string,
	link:string,
	has_dropdown:boolean
}
export const menu_data_demo: DemoNavType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "Dashboard",
		link: "/dashboard",
		has_dropdown: false,
	},
	
];
export default menu_data;
