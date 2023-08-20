"use client"

import React from 'react';

import Image from 'next/image';
import metaverse from '@/app/assets/images/metaverse.webp';
import ai from '@/app/assets/images/ai.webp';
import cloud from '@/app/assets/images/cloud.webp';
import ambient from '@/app/assets/images/ambient.webp';
import genomics from '@/app/assets/images/genomics.webp';
import network from '@/app/assets/images/network.webp';




export const ProgramData = [
    {
        slug: "wmd", 
        header: 'Web 3.0 (Blockchain) and Metaverse Specialization',
        description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
        image: metaverse,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
                number: 5,
            }
        ]
    },{
        slug: "ai",
        header: 'Artificial Intelligence (AI) and Deep Learning Specialization',
        description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
        image: ai,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'AI-351: Developing Planet-Scale Intelligent APIs and Python Programming',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'AI-361: Deep Learning and MLOps',
                number: 5,
            }
        ]
    },{
        slug: "cncs",
        header: 'Cloud-Native Computing Specialization',
        description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
        image: cloud,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'CN-351: Certified Kubernetes Application Developer (CKAD)',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'CN-361: Developing Multi-Cloud Apps using CDK for Terraform',
                number: 5,
            }
        ]
    },{
        slug: "acIOT",
        header: 'Ambient Computing and IoT Specialization',
        description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.',
        image: ambient,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'AC-351: Ambient Computing with Voice Assistants and Matter Devices',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'AC-361: Embedded Programming using C and Rust',
                number: 5,
            }
        ]
    },{
        slug: "gbs",
        header: 'Genomics and Bioinformatics Specialization',
        description: 'Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.',
        image: genomics,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'Bio-351: Python for Biologists',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'Bio-361: Bioinformatics with Python',
                number: 5,
            }
        ]
    },{
        slug: "npas",
        header: 'Network Programmability and Automation Specialization',
        description: 'More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.',
        image: network,
        quarters: [
            {
              header: 'Quarter IV',
              description: 'NPA-351: CCNA 200-301 Certification',
              number: 4,
            },
  
            {
                header: 'Quarter V',
                description: 'NPA-361: Network Programmability and Automation',
                number: 5,
            }
        ]
    },
  
  
  ]
  
 

