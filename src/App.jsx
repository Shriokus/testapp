import Headaer from './Header/Header'
import Footer from './Footer/footer'
import Button from './Button'
import TodoList from './TodoList'
export const App = () => {
  return (
    <div>
    <Headaer />
    <TodoList />
    <Button text = "追加する" disabled = {true}/>
    <Footer />

    </div>
  )
}

