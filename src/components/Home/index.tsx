'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import Image from 'next/image'
import { CustomButton } from '@/components/CustomButton'
import state from '@/storeValtio'
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '@/config/motion'

export default function Home() {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <Image
              src={'/threejs.png'}
              alt='logo'
              width={50}
              height={32}
              className='size-8 object-contain'
            />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET&apos;S <br className='xl:block hidden' /> DO IT
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600'>
                Create your unique and exclusive shirt with our brand-new 3D customization
                tool. <strong>Unleash your imagination</strong> and define your own style
              </p>
              <CustomButton
                type='filled'
                title='Customize It'
                handleClick={() => (state.intro = false)}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              ></CustomButton>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
