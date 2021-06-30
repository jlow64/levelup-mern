import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 15%;
  height: 15%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 450px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 70%;
    font-size: 12px;
    padding: 10px 24px;
    background-color: transparent;
    color: #FF8B00;
    border: 1px solid #FF8B00;
    border-radius: 10px;
  }

  button:hover {
    background-color: lightgray;
    transition 850ms;
  }

  p {
    font-size: 24px;
    color: #787878;
  }

  hr {
    margin-top: -5px;
    border: 1px;
    width: 70%;
  }
`;

const LogoutModal = ({ showModal, setShowModal, logout }) => {
    return (
        <>
            {showModal? (
                <Background>
                    <ModalWrapper>
                        <ModalContent>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="32" fill="#DADADA"/>
                                <path d="M46.7428 36.5715C46.7428 36.5715 48.5714 33.3715 48.5714 28.5715C48.5714 22.2857 43.9428 14.8572 32 14.8572C20.0571 14.8572 15.4286 22.2857 15.4286 28.5715C15.4286 33.3715 17.2 36.5715 17.2 36.5715C15.1428 38.9143 13.8857 43.6572 15.6571 46.7429C16.4 48 23.7143 52.4572 24.4 44.5143H39.4857C40.2286 52.4 47.5428 48 48.2286 46.7429C50.0571 43.6572 48.8 38.9143 46.7428 36.5715Z" fill="#594640"/>
                                <path d="M32 17.1429C23.2571 17.1429 16.8571 21.7143 16.8571 27.4286C16.8571 27.4286 19.2 18.8572 32 18.8572C44.8 18.8572 46.5714 27.4286 46.5714 27.4286C46.5714 21.7143 40.7429 17.1429 32 17.1429Z" fill="#C28FEF"/>
                                <path d="M46.4572 37.7143C50 37.7143 50 32.5714 46.4572 32.5714V30.8572C46.4572 30.8572 26.4572 30.3429 21.8857 23.4286C23.0286 30.4 17.4857 32.5714 17.4857 32.5714C13.9429 32.5714 13.9429 37.7143 17.4857 37.7143C17.4857 41.7143 21.6572 48 31.9429 48C42.2286 48 46.4572 41.7143 46.4572 37.7143Z" fill="#FFE1BD"/>
                                <path d="M39.1428 38.2857C41.1942 38.2857 42.8571 36.6228 42.8571 34.5715C42.8571 32.5201 41.1942 30.8572 39.1428 30.8572C37.0915 30.8572 35.4286 32.5201 35.4286 34.5715C35.4286 36.6228 37.0915 38.2857 39.1428 38.2857Z" fill="white"/>
                                <path d="M24.8571 38.2857C26.9085 38.2857 28.5714 36.6228 28.5714 34.5715C28.5714 32.5201 26.9085 30.8572 24.8571 30.8572C22.8058 30.8572 21.1429 32.5201 21.1429 34.5715C21.1429 36.6228 22.8058 38.2857 24.8571 38.2857Z" fill="white"/>
                                <path d="M39.1429 37.1429C40.563 37.1429 41.7143 35.9916 41.7143 34.5714C41.7143 33.1513 40.563 32 39.1429 32C37.7227 32 36.5714 33.1513 36.5714 34.5714C36.5714 35.9916 37.7227 37.1429 39.1429 37.1429Z" fill="#664E27"/>
                                <path d="M39.1429 35.4286C39.6163 35.4286 40 35.0448 40 34.5714C40 34.0981 39.6163 33.7143 39.1429 33.7143C38.6695 33.7143 38.2857 34.0981 38.2857 34.5714C38.2857 35.0448 38.6695 35.4286 39.1429 35.4286Z" fill="#231F20"/>
                                <path d="M24.8572 37.1429C26.2773 37.1429 27.4286 35.9916 27.4286 34.5714C27.4286 33.1513 26.2773 32 24.8572 32C23.437 32 22.2857 33.1513 22.2857 34.5714C22.2857 35.9916 23.437 37.1429 24.8572 37.1429Z" fill="#664E27"/>
                                <path d="M24.8571 35.4286C25.3305 35.4286 25.7143 35.0448 25.7143 34.5714C25.7143 34.0981 25.3305 33.7143 24.8571 33.7143C24.3838 33.7143 24 34.0981 24 34.5714C24 35.0448 24.3838 35.4286 24.8571 35.4286Z" fill="#231F20"/>
                                <path d="M36.6286 41.2C33.6572 43.2571 30.3429 43.2571 27.3715 41.2C27.0286 40.9714 26.6857 41.3714 26.9143 41.7714C27.8286 43.2571 29.6572 44.5714 32 44.5714C34.3429 44.5714 36.1715 43.2571 37.0857 41.7714C37.3143 41.3714 36.9715 40.9714 36.6286 41.2Z" fill="#664E27"/>
                            </svg>
                            <p>Chloe Sim</p>
                            <hr/>
                            <button type="button">View Your Profile</button>
                            <button type="button" onClick={logout} >Logout</button>

                        </ModalContent>
                    </ModalWrapper>
                </Background>
            ): null}
        </>
    );
};

export default LogoutModal;
