'use server'
import { revalidatePath } from 'next/cache' ;
import { redirect } from 'next/navigation';


export const createCamps = async (prevState: any, formData: FormData)=>{
    console.log('Hello Create Camps');

    // ดึงค่าจาก formData
    //const title = formData.get('title');
    //const location = formData.get('location');

    // แสดงผลค่าที่ได้จากฟอร์ม
    //console.log('Title:', title);
    //console.log('Location:', location);

    const rawData = Object.fromEntries(formData);
    console.log(rawData);

    //revalidatePath('/camp');
    //redirect('/');
    return "crate camp success!!!"; 

}