"use client"

import React, { useState } from 'react';
import styled from 'styled-components';

const ServiceMediatorWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [clientApproved, setClientApproved] = useState(false);

  const steps = [
    {
      title: "Requirement Sharing",
      description: "Client shares their requirements with the Mediator",
      icon: "📋",
      color: "#4b6cb7"
    },
    {
      title: "Communication to Provider",
      description: "Mediator communicates with Service Provider",
      icon: "📞",
      color: "#3b5998"
    },
    {
      title: "Service Fulfillment",
      description: "Service Provider fulfills the requirement",
      icon: "🛠️",
      color: "#2a4d8e"
    },
    {
      title: "Delivery to Client",
      description: "Service is delivered to Client through Mediator",
      icon: "📦",
      color: "#1a3d84"
    },
    {
      title: "Client Decision",
      description: "Client either approves or requests changes",
      icon: "✅",
      color: "#0a2d7a"
    }
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Reset the cycle
      setActiveStep(0);
      setClientApproved(false);
    }
  };

  const handleApprove = () => {
    setClientApproved(true);
  };

  const handleReject = () => {
    setClientApproved(false);
    setActiveStep(0); // Back to requirement sharing
  };

  return (
    <Container>
      <Header>
        <h1>Service Mediator Workflow</h1>
        <p>How our service mediation process works</p>
      </Header>
      
      <WorkflowContainer>
        <StepsContainer>
          {steps.map((step, index) => (
            <Step 
              key={index} 
              active={index <= activeStep}
              color={step.color}
              onClick={() => setActiveStep(index)}
            >
              <StepIcon>{step.icon}</StepIcon>
              <StepContent>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </StepContent>
              <StepNumber>{index + 1}</StepNumber>
            </Step>
          ))}
        </StepsContainer>
        
        <ArrowContainer>
          <Arrow>→</Arrow>
          <Arrow>→</Arrow>
          <Arrow>→</Arrow>
          <Arrow>→</Arrow>
        </ArrowContainer>
        
        <Visualization>
          <Participants>
            <Participant active={activeStep >= 0}>
              <Avatar>👨‍💼</Avatar>
              <Name>Client</Name>
            </Participant>
            
            <Participant active={activeStep >= 1}>
              <Avatar>🤝</Avatar>
              <Name>Mediator</Name>
            </Participant>
            
            <Participant active={activeStep >= 2}>
              <Avatar>👨‍💻</Avatar>
              <Name>Service Provider</Name>
            </Participant>
          </Participants>
          
          <Connections>
            <Connection active={activeStep >= 1} />
            <Connection active={activeStep >= 2} />
            <Connection active={activeStep >= 3} />
            <Connection active={activeStep >= 4} />
          </Connections>
        </Visualization>
        
        {activeStep === steps.length - 1 && (
          <DecisionContainer>
            <h3>Client Decision</h3>
            <p>Did the client approve the service?</p>
            <ButtonGroup>
              <ApproveButton onClick={handleApprove}>Yes, Approved</ApproveButton>
              <RejectButton onClick={handleReject}>No, Need Changes</RejectButton>
            </ButtonGroup>
            
            {clientApproved && (
              <ApprovalMessage>
                <h4>Service Approved! 🎉</h4>
                <p>The cycle completes successfully. Client can request new services anytime.</p>
              </ApprovalMessage>
            )}
          </DecisionContainer>
        )}
        
        <Controls>
          <NextButton onClick={handleNext}>
            {activeStep < steps.length - 1 ? 'Next Step' : 'Restart Cycle'}
          </NextButton>
        </Controls>
      </WorkflowContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  p {
    color: #7f8c8d;
    font-size: 18px;
  }
`;

const WorkflowContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    height: 4px;
    background: #ecf0f1;
    z-index: 1;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.active ? props.color : '#ecf0f1'};
    z-index: 1;
    transition: all 0.3s ease;
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
`;

const StepContent = styled.div`
  text-align: center;
  padding: 0 10px;
  
  h3 {
    margin: 0 0 8px 0;
    color: #2c3e50;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    color: #7f8c8d;
    font-size: 14px;
  }
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #7f8c8d;
  position: absolute;
  top: 65px;
  right: calc(50% - 15px);
  z-index: 2;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 40px 0;
  padding: 0 30px;
`;

const Arrow = styled.div`
  font-size: 24px;
  color: #bdc3c7;
`;

const Visualization = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 40px;
`;

const Participants = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const Participant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${props => props.active ? 1 : 0.4};
  transition: opacity 0.3s ease;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

const Name = styled.div`
  font-weight: bold;
  color: #2c3e50;
`;

const Connections = styled.div`
  position: absolute;
  top: 40px;
  left: 80px;
  right: 80px;
  display: flex;
  justify-content: space-between;
`;

const Connection = styled.div`
  flex: 1;
  height: 4px;
  background: ${props => props.active ? '#3498db' : '#ecf0f1'};
  margin: 0 10px;
  transition: background 0.3s ease;
`;

const DecisionContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  margin-bottom: 20px;
  
  h3 {
    color: #2c3e50;
    margin-bottom: 10px;
  }
  
  p {
    color: #7f8c8d;
    margin-bottom: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ApproveButton = styled(Button)`
  background: #2ecc71;
  color: white;
  
  &:hover {
    background: #27ae60;
  }
`;

const RejectButton = styled(Button)`
  background: #e74c3c;
  color: white;
  
  &:hover {
    background: #c0392b;
  }
`;

const ApprovalMessage = styled.div`
  padding: 15px;
  background: #d4edda;
  border-radius: 6px;
  color: #155724;
  
  h4 {
    margin: 0 0 10px 0;
  }
  
  p {
    margin: 0;
  }
`;

const Controls = styled.div`
  text-align: center;
`;

const NextButton = styled.button`
  padding: 12px 30px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #2980b9;
  }
`;

export default ServiceMediatorWorkflow;