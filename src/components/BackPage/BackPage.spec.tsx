import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import BackPage from './BackPage' 
import { ProductContext } from '../../contextApi/ProductContext'

const defaultContextValue = {
  pageBack: true,
  data: null,
  setData: vi.fn(),
  newIngrediente: null,
  setNewIngrediente: vi.fn(),
}

describe("Testa componente BackPage", () => {
    
  it("deve renderizar o botão de voltar quando pageBack for true", async () => {
    const contextValue = { ...defaultContextValue, pageBack: true }

    render(
      <ProductContext.Provider value={contextValue}>
        <BackPage />
      </ProductContext.Provider>
    )

    const buttonBack = await screen.findByAltText('Icone para voltar de página')
    expect(buttonBack).toBeInTheDocument()
  });

  it("não deve renderizar nada quando pageBack for false", () => {
    const contextValue = { ...defaultContextValue, pageBack: false }

    render(
      <ProductContext.Provider value={contextValue}>
        <BackPage />
      </ProductContext.Provider>
    )

    const buttonBack = screen.queryByAltText('Icone para voltar de página')
    expect(buttonBack).not.toBeInTheDocument()
  });

  it("deve chamar window.history.back ao clicar no botão de voltar", async () => {
    const contextValue = { ...defaultContextValue, pageBack: true }

    const mockHistoryBack = vi.fn()
    Object.defineProperty(window, 'history', {
      writable: true,
      value: { back: mockHistoryBack }
    })

    render(
      <ProductContext.Provider value={contextValue}>
        <BackPage />
      </ProductContext.Provider>
    )

    const buttonBack = await screen.findByAltText('Icone para voltar de página')
    expect(buttonBack).toBeInTheDocument()

    fireEvent.click(buttonBack)
    expect(mockHistoryBack).toHaveBeenCalled()
  });

})
