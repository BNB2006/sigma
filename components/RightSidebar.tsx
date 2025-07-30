import React, { useRef } from 'react'
import Dimensions from './settings/Dimensions'
import Text from './settings/Text'
import Color from './settings/Color'
import Export from './settings/Export'
import { RightSidebarProps } from '@/types/type'
import { modifyShape } from '@/lib/shapes'

const RightSidebar = ({ elementAttributes, setElementAttributes, fabricRef, activeObjectRef, isEditingRef, syncShapeInStorage }: RightSidebarProps) => {

    const colorInputRef = useRef(null);
    const strokeInputRef = useRef(null);

    const handleInputChange = (property: string, value: string) => {
        if (!isEditingRef.current) isEditingRef.current = true;

        setElementAttributes((prev) => ({ ...prev, [property]: value }))

        modifyShape({
            canvas: fabricRef.current as fabric.Canvas,
            property,
            value,
            activeObjectRef,
            syncShapeInStorage,
        })
    }
    
    return (
        <section className='flex flex-col border-l border-primary-border bg-primary-surface/95 backdrop-blur-md text-primary-text min-w-[280px] sticky right-0 h-full max-sm:hidden select-none overflow-hidden'>

            <div className="sticky top-0 bg-primary-surface/95 backdrop-blur-md border-b border-primary-border px-6 py-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-accent rounded-full animate-pulse"></div>
                    <h3 className="text-sm font-semibold text-primary-text uppercase tracking-wider">Properties</h3>
                </div>
                <p className="text-xs text-primary-textSecondary mt-2">Customize your selected element</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-20">
                <div className="space-y-4">
                    <div className="card">
                        <h4 className="text-sm font-semibold text-primary-text mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                            Dimensions
                        </h4>
                        <Dimensions
                            width={elementAttributes.width}
                            height={elementAttributes.height}
                            handleInputChange={handleInputChange}
                            isEditingRef={isEditingRef}
                        />
                    </div>

                    <div className="card">
                        <h4 className="text-sm font-semibold text-primary-text mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            Typography
                        </h4>
                        <Text
                            fontFamily={elementAttributes.fontFamily}
                            fontSize={elementAttributes.fontSize}
                            fontWeight={elementAttributes.fontWeight}
                            handleInputChange={handleInputChange}
                        />
                    </div>

                    <div className="card">
                        <h4 className="text-sm font-semibold text-primary-text mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                            </svg>
                            Colors
                        </h4>
                        <div className="space-y-3">
                            <Color
                                inputRef={colorInputRef}
                                attribute={elementAttributes.fill}
                                placeholder='Fill color'
                                attributeType="fill"
                                handleInputChange={handleInputChange}
                            />
                            <Color
                                inputRef={strokeInputRef}
                                attribute={elementAttributes.stroke}
                                placeholder='Stroke color'
                                attributeType="stroke"
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="card">
                        <h4 className="text-sm font-semibold text-primary-text mb-4 flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Export
                        </h4>
                        <Export />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RightSidebar