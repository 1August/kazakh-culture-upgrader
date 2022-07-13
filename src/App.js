import './App.css'
import {Modal} from "./components/Modal/Modal";
import {Header} from "./components/Header/Header";
import {GamePage} from "./pages/GamePage/GamePage";
import {useId, useState} from "react";

function App() {
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = e => {
        e.stopPropagation()
        setModalOpen(false)
    }

    const data = [
        {
            id: useId(),
            label: 1,
            card: {
                title: 'Бір',
                content: 'Бір қарлығаш келгенмен жаз болмайды,\n' +
                    'Бір сауысқан келгенмен қыс болмайды.'
            }
        },
        {
            id: useId(),
            label: 2,
            card: {
                title: 'Екі',
                content: 'Жерді екі рет жыртқан, өнімді екі есе көп алады.'
            }
        },
        {
            id: useId(),
            label: 3,
            card: {
                title: 'Үш',
                content: 'Досыңды үш күн сынама, үш жыл сына.'
            }
        },
        {
            id: useId(),
            label: 4,
            card: {
                title: 'Төрт',
                content: 'Төрт кісіге шай құйғанша, төртпен бірге қос айда.'
            }
        },
        {
            id: useId(),
            label: 5,
            card: {
                title: 'Бес',
                content: 'Бес бармақ жиналса, жұдырық болады.'
            }
        },
        {
            id: useId(),
            label: 6,
            card: {
                title: 'Алты',
                content: 'Ағайынды алты болсаң, адам тимес.'
            }
        },
        {
            id: useId(),
            label: 7,
            card: {
                title: 'Жеті',
                content: 'Жақсыны жеті жыл жетелесең, адам болады,\n' +
                    'Жаманды жеті жыл жетелесең, надан болады.'
            }
        },
        {
            id: useId(),
            label: 8,
            card: {
                title: 'Сегіз',
                content: 'Санақ санамай сегіз деме, сынап - сынамай дос деме.'
            }
        },
        {
            id: useId(),
            label: 9,
            card: {
                title: 'Тоғыз',
                content: 'Тоғыз тоңқылдақ, бір шіңкілдек.'
            }
        }
    ]

    const [modalCard, setModalCard] = useState({})

    const openThisCard = (el) => {
        setModalCard(el)
        setModalOpen(true)
    }

    return (
        <div className="App">
            <Modal
                modalOpen={modalOpen}
                modalCard={modalCard}
                closeModal={closeModal}
            />
            <Header/>
            <main>
                {/*<StartPage*/}
                {/**/}
                {/*/>*/}
                <GamePage
                    data={data}
                    openThisCard={openThisCard}
                />
            {/*    <Routes>*/}

            {/*    </Routes>*/}
            </main>
            {/*<Footer/>*/}
        </div>
    )
}

export default App