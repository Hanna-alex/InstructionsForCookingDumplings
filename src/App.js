import styles from './app.module.css'
import data from './data.json'
import { useState } from 'react'

export const App = () => {
	// Можно задать 2 состояния —
	const [steps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)
	const clickBack = () => {
		setActiveIndex(activeIndex - 1)
	}

	const clickNext = () => {
		if (isLastStep) {
			setActiveIndex(0)
		} else {
			setActiveIndex(activeIndex + 1)
		}
	}
	const btnClick = (index) => {
		setActiveIndex(index)
	}

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	let isFirstStep = activeIndex === 0
	let isLastStep = activeIndex === data.length - 1

	return (

		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }, index) =>
							<li className={`${styles['steps-item']} ${index === activeIndex ? styles.active : ''} ${index <= activeIndex ? styles.done : ''}`} >
								<button className={styles['steps-item-button']} onClick={() => btnClick(index)}>{Number(id)}</button>
								{title}
							</li>)}

					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled={isFirstStep} onClick={clickBack}>Назад</button>
						<button className={styles.button} onClick={clickNext}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div >
	)
}
