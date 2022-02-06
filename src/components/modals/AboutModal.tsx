import { BaseModal } from './BaseModal'
import ReactGA from 'react-ga';

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" image='../../imgs/about.png' isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Words brought to you by Christine Qian, Katie Riley, Lizzie DelMonico, and Tyler Garvey.<br></br>
        Created and hosted by {' '}
        <a
          href="https://teddyh.io/?src=dummerdle"
          className="underline font-bold"
        >
        Teddy Hwang
        </a>
        {' '} based on code by {' '}
        <a
          href="https://www.hannahmariepark.com/"
          className="underline font-bold"
        >
        Hannah Park
        </a>.<br></br>
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
        Original game
        </a>{' '} created by Josh Wardle.<br></br>
      </p>
    </BaseModal>
  )
}
