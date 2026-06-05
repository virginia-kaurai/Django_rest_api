import React, { useState } from 'react'
import api from './axios'
const Teacher =()=>{




    const [teachers,setTeacher]= useState([]);

    const [loading ,setLoading]= useState(false);

    const [name,setName] = useState('');
    const  [age,setAge] = useState();


    async function createTeacher(e){
        e.preventDefault()
        let data={  name,
           age}
     

           try{
            setLoading(true)
            const response =  await api.post('api/teacher/',data)
            getTeachers()
           }catch(error){
            console.log(error)
           }
           finally{
            setLoading(false)}
    }
    async function getTeachers (){

        try{
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve,3000))
            const response = await api.get('api/teacher/')

             await setTeacher(response.data) 
        }catch(error){
            console.log(error)
        }finally{
             setLoading(false)
        }
    } 
    return( 
        <>
        <div > <h1>Teachers</h1></div>
        <div>

            {
                teachers.map((teacher,index) =>(


                    <div className="">
                        <h1>{teacher.name}</h1>
                        <h4>{teacher.age}</h4>
                    </div>
                ))
            }

            <button onClick={() => getTeachers()}>{loading? "fetching...": "fetch"}</button>
        </div>

        <div>


            <form onSubmit= {(e) =>createTeacher(e)}> 
                <input  type="text" placeholder='enter name' value={name} onChange ={(e) => setName(e.target.value)}/>
                <label>name</label>

                 <input  type="age" placeholder='enter age' value={age} onChange ={(e) => setAge(e.target.value)}/>
                <label>name</label>
     <button type='submit'>{loading ? 'creating...': 'create'}</button>
            </form>
        </div>
        </>
        
    )
}
export default Teacher