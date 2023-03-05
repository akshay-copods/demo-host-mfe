import React from 'react'

const OnboardingLayout = ({ header, onboarding }: { header?: React.ReactNode, onboarding?: React.ReactNode }) => {
    return (
        <div className='h-screen flex flex-col'>

            {header ? header : <div className='h-full w-full bg-gray-100 border-2 flex justify-center items-center min-h-5'>This is skeleton</div>}
            {onboarding ? onboarding : <div className='h-full w-full bg-gray-100 border-2 flex justify-center items-center'>This is skeleton</div>}

        </div>
    )
}

export default OnboardingLayout
