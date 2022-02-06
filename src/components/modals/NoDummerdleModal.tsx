import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const NoDummerdleModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="No Dummerdle Today" image='../../imgs/none.png' isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Dummerdle is only available during the school year. Check back after break!
      </p>
    </BaseModal>
  )
}
