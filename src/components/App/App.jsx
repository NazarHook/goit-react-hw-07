import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import { selectContacts, selectError, selectLoading } from '../../redux/contacts/selectors'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
function App() {
  const loader = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
  {loader && <Loader></Loader>}
  {error && <ErrorMessage></ErrorMessage>}
</div>
    </>
  )
}

export default App