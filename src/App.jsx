import { useState } from 'react'


function App() {

  const initialFormData = {
    author: '',
    title: '',
    description: ''
  }

  const [formData, setFormData] = useState(initialFormData);
  const [titleList, setTitleList] = useState([]);

  function updateFormData(newValue, fieldName) {
    //clono l'ogetto e uso lo spread per eliminare lo stato attuale
    const newFormData = { ...formData };

    //aggiorno la chiave e il valore
    newFormData[fieldName] = newValue

    //passi l'ogetto modificato a setFormData
    setFormData(newFormData)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setTitleList([...titleList, { ...formData }])

    //resetto form
    setFormData(initialFormData)
  }

  function removeTitle(idToRemove) {
    // const newUsersList = [...usersList]

    // newUsersList.splice(newUsersList.findIndex((user) => user.id === idToRemove), 1)

    setTitleList(titleList.filter((title, i) => i !== idToRemove));

  }


  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-2/4 h-2/4 bg-gray-200 rounded'>
          <h1 className='text-center font-semibold my-2'>Compila il form</h1>
          <form className='flex justify-around flex-col w-2/4 h-2/6 mx-auto' onSubmit={handleSubmit}>
            <input className='border-solid border-2 border-black rounded' type="text" name="author" placeholder="inserisci l'autore" value={formData.author} onChange={(e) => updateFormData(e.target.value, 'author')} />
            <input className='border-solid border-2 border-black rounded' type="text" name="title" placeholder='inserisci il titolo' value={formData.title} onChange={(e) => updateFormData(e.target.value, 'title')} />
            <input className='border-solid border-2 border-black rounded' type="text" name="description" placeholder='inserisci la descrizione' value={formData.description} onChange={(e) => updateFormData(e.target.value, 'description')} />
            <button className='bg-blue-500 p-2 rounded text-white'>Aggiungi</button>
          </form>
          <div className='w-full mt-10'>
            <ul className='w-full'>
              {titleList.map((elem, i) => {
                return (
                  <li key={i} className='flex justify-between border-l-4 border-green-600 w-2/4 mx-auto my-3 pl-2'>{elem.author} - {elem.title}, {elem.description}
                    <div className='text-red-500 cursor-pointer'>
                      <svg onClick={() => removeTitle(i)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>                    
                    </div>
                  </li>
                )
              })}
            </ul>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
