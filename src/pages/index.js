import React, { useRef, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Konva from 'konva'
import Img from 'gatsby-image'
import { CountUp } from 'countup.js'

import { TimelineMax, Back, Power4 } from '../lib/gsap'
import useInView from '../hooks/useInView'

import SEO from '../components/SEO'
import Container from '../components/Container'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import RotateWords from '../components/RotateWords'
import VideoPlayer from '../components/VideoPlayer'
import ClientRaves from '../components/ClientRaves'
import MissionRings from '../components/MissionRings'
import { AutoSlide, AutoScale, AutoFade } from '../components/Animated'

import headerBg from '../assets/header-bg.mp4'
import bgVideoColor from '../assets/bg-video-color.mp4'
import signet from '../assets/signet.svg'

import aia from '../assets/logos/aia.svg'
import warnerBros from '../assets/logos/WarnerBros.svg'
import apple from '../assets/logos/apple.svg'
import bluesCross from '../assets/logos/blue-cross.svg'
import citi from '../assets/logos/citi.svg'
import disney from '../assets/logos/disney.svg'
import google from '../assets/logos/google.svg'
import grammy from '../assets/logos/grammy.svg'
import ibm from '../assets/logos/ibm.svg'
import livenation from '../assets/logos/livenation.svg'
import nasa from '../assets/logos/nasa.svg'
import microsoft from '../assets/logos/microsoft.svg'
import nbc from '../assets/logos/nbc.svg'
import prudential from '../assets/logos/prudential.svg'
import redbull from '../assets/logos/redbull.svg'
import ted from '../assets/logos/ted.svg'
import toyota from '../assets/logos/toyota.svg'
import twitter from '../assets/logos/twitter.svg'
import universal from '../assets/logos/universal.svg'
import walmart from '../assets/logos/walmart.svg'
import AIAHongkong from '../assets/logos/AIA-hongkong.svg'
import amazonMusic from '../assets/logos/Amazon-Music.svg'
import COXMedia from '../assets/logos/COX-media.svg'
import peloton from '../assets/logos/Peloton.svg'
import PNCBank from '../assets/logos/PNC-Bank.svg'
import tiktok from '../assets/logos/TikTok.svg'

import useMedia from '../hooks/useMedia'
import { media } from '../styles/tools'

export const query = graphql`
  query {
    ns1: file(relativePath: { eq: "ns-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ns2: file(relativePath: { eq: "ns-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    ns3: file(relativePath: { eq: "ns-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    freddieHero: file(relativePath: { eq: "Freddie-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    expert: file(relativePath: { eq: "expert.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    speaker: file(relativePath: { eq: "speaker.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    performer: file(relativePath: { eq: "performer.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    videoBg: file(relativePath: { eq: "video-bg.png" }) {
      ...windowWide
    }
    keynoteBg: file(relativePath: { eq: "keynotes-bg.png" }) {
      ...windowWide
    }
    bioBg: file(relativePath: { eq: "bio.png" }) {
      ...windowWide
    }
    goldRibbon: file(relativePath: { eq: "gold-ribbon.png" }) {
      ...windowWide
    }
    headerBgPoster: file(relativePath: { eq: "header-bg-poster.png" }) {
      childImageSharp {
        fixed(
          width: 1920
          height: 1080
          quality: 90
          cropFocus: CENTER
          toFormat: JPG
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    testimonialsBg: file(relativePath: { eq: "testimonials-bg.png" }) {
      ...windowWide
    }
  }
`

const paths = [
  'M2318.575,206.585c-0.156-0.16-15.959-16.166-48.936-34.288 c-30.436-16.727-82.142-38.729-155.627-48.551c-82.607-11.041-175.332-4.761-275.603,18.67 c-125.354,29.294-262.915,85.627-408.861,167.435c-125.915,70.581-241.762,105.962-346.269,105.962 c-58.038,0-112.575-10.911-163.402-32.765c-52.065-22.386-100.251-56.457-143.221-101.267 c-34.368-35.84-65.494-78.591-92.515-127.065C638.14,72.19,619.768,0.712,619.588,0',
  'M2319.054,222.91c-0.202-0.174-20.69-17.668-59.703-37.833 c-36.006-18.61-95.604-43.364-175.054-55.61c-89.306-13.764-184.976-9.245-284.355,13.433 c-124.243,28.352-254.669,85.324-387.653,169.336c-116.149,73.376-226.698,110.199-330.215,110.199 c-46.467,0-91.517-7.419-135.022-22.283c-57.852-19.766-113.104-52.898-164.222-98.476 c-40.885-36.454-79.232-80.906-113.977-132.122C609.702,82.362,581.146,4.738,580.864,3.964',
  'M2319.526,239.225c-0.249-0.188-25.453-19.138-70.542-41.305 c-41.611-20.457-109.15-47.916-194.599-62.552c-96.035-16.449-194.66-13.684-293.136,8.222 c-123.102,27.384-246.315,84.927-366.22,171.03c-106.292,76.328-211.61,114.69-314.323,114.69 c-34.977,0-69.648-4.447-103.959-13.359c-63.062-16.381-125.154-48.029-184.551-94.066c-47.506-36.82-93.405-82.876-136.421-136.888 C582.539,93.043,542.539,8.761,542.144,7.921',
  'M2319.993,255.535c-0.297-0.203-30.247-20.563-81.448-44.677 c-47.251-22.254-122.778-52.347-214.256-69.329c-102.808-19.085-204.394-18.062-301.938,3.044 c-121.933,26.381-237.866,84.394-344.579,172.427c-96.359,79.491-196.51,119.517-298.61,119.517c-23.902,0-47.91-2.193-72.003-6.588 c-67.328-12.281-135.71-41.906-203.247-88.054c-54.014-36.907-107.613-84.407-159.307-141.178 c-88.006-96.652-140.66-187.915-141.182-188.825',
  'M2320.457,271.842c-0.345-0.216-35.065-21.927-92.407-47.914 c-52.919-23.983-136.473-56.615-234.003-75.88c-109.604-21.65-214.159-22.352-310.761-2.087 c-120.741,25.329-229.337,83.673-322.77,173.414c-86.331,82.919-181.385,124.778-283.056,124.778 c-13.536,0-27.178-0.741-40.944-2.227c-70.372-7.592-144.229-34.724-219.517-80.642c-60.212-36.724-121.473-85.479-182.079-144.911 C531.739,115.191,465.362,16.799,464.704,15.817',
  'M2320.918,288.145c-0.392-0.229-39.895-23.21-103.391-50.974 c-58.599-25.622-150.196-60.671-253.79-82.138c-116.415-24.125-223.942-26.534-319.594-7.16 c-119.538,24.211-220.769,82.709-300.882,173.869c-76.184,86.689-166.166,130.579-267.603,130.579c-4.09,0-8.189-0.071-12.316-0.214 c-72.04-2.49-150.382-26.776-232.848-72.187c-65.95-36.314-134.674-86.145-204.264-148.106 C507.756,126.328,426.788,20.811,425.984,19.758',
  'M2321.378,304.448c-1.757-0.962-178.052-96.75-387.893-141.862 c-123.213-26.488-233.711-30.58-328.419-12.16c-118.34,23.016-212.229,81.45-279.059,173.68 c-63.059,87.025-143.591,133.044-239.36,136.778c-4.237,0.165-8.516,0.248-12.817,0.248c-69.111,0-146.479-21.288-230.229-63.376 c-71.142-35.752-147.019-86.51-225.526-150.863C484.422,137.335,388.218,24.818,387.262,23.694',
  'M2321.836,320.749c-1.944-1.005-197.018-101.052-418.363-149.985 c-129.969-28.733-243.425-34.48-337.216-17.083c-117.172,21.733-203.809,79.865-257.505,172.781 c-48.931,84.671-117.15,132.552-202.763,142.314c-11.037,1.259-22.395,1.888-34.042,1.888c-63.569,0-136.086-18.706-216.165-55.823 c-75.766-35.117-158.429-86.7-245.693-153.316C461.527,148.114,349.652,28.819,348.54,27.627',
  'M2322.293,337.05c-1.396-0.684-141.558-68.971-317.522-122.598 c-103.336-31.493-198.614-51.842-283.188-60.483c-105.678-10.795-194.84-3.236-265.004,22.47 c-77.728,28.479-133.271,79.744-165.085,152.373c-36.459,83.232-93.668,132.854-170.036,147.485 c-16.132,3.091-33.179,4.635-51.087,4.635c-58.801,0-127.006-16.623-203.568-49.686c-79.861-34.488-168.94-86.841-264.763-155.603 C438.906,158.579,311.087,32.813,309.815,31.557',
  'M2322.749,353.349c-1.578-0.737-160.091-74.36-351.924-131.271 c-112.655-33.422-214.586-54.625-302.96-63.022c-110.419-10.49-199.854-0.903-265.813,28.496 c-64.575,28.783-107.581,77.099-127.822,143.605c-25.18,82.732-72.514,134.099-140.687,152.671 c-19.559,5.328-40.913,7.988-63.998,7.988c-54.804,0-119.367-14.988-192.858-44.847c-83.507-33.928-178.675-87.025-282.861-157.817 C416.457,168.633,272.523,36.802,271.09,35.485',
  'M2323.204,369.648c-1.754-0.784-177.795-79.18-384.236-139.229 c-121.233-35.264-229.072-57.394-320.519-65.774c-114.248-10.471-203.066,0.611-263.986,32.939 c-53.848,28.575-86.653,74.303-97.503,135.914c-14.635,83.102-52.989,136.281-113.997,158.061 c-21.475,7.667-45.869,11.495-73.067,11.495c-51.547,0-113.189-13.744-184.264-41.157c-86.803-33.479-187.801-87.31-300.187-159.994 C394.112,178.16,233.959,40.784,232.364,39.411',
  'M2323.657,385.946c-1.918-0.828-194.396-83.538-414.195-146.691 c-129.079-37.087-242.181-60.271-336.163-68.909c-117.404-10.792-205.104,1.217-260.661,35.69 c-45.354,28.143-69.9,71.813-72.955,129.8c-4.435,84.203-34.455,139.265-89.227,163.656c-22.132,9.855-48.433,14.779-78.754,14.779 c-48.973,0-108.444-12.836-177.866-38.46c-89.852-33.165-196.489-87.706-316.949-162.11 C371.808,187.033,195.395,44.758,193.637,43.336',
  'M2324.11,402.243c-2.071-0.868-209.78-87.573-441.793-153.898 c-136.251-38.95-254.095-63.353-350.258-72.531c-120.123-11.467-206.515,0.926-256.791,36.828 c-38.776,27.69-56.564,69.926-52.869,125.534c2.934,44.153-1.489,80.988-13.146,109.48c-10.994,26.871-28.695,47.01-52.614,59.856 c-21.816,11.717-49.085,17.57-81.629,17.57c-47.014,0-105.043-12.21-173.612-36.598c-92.746-32.987-204.888-88.201-333.312-164.11 C349.449,195.144,156.831,48.724,154.911,47.26',
  'M2324.562,418.541c-2.212-0.906-223.98-91.417-467.231-161.05 c-142.852-40.893-265.046-66.689-363.188-76.673c-122.579-12.47-207.72-0.171-253.059,36.553 c-33.746,27.333-45.85,68.767-35.975,123.148c8.206,45.191,8.399,83.032,0.574,112.473c-7.388,27.794-22.105,48.815-43.743,62.479 c-20.823,13.15-48.323,19.72-82.313,19.72c-45.588,0-102.853-11.817-171.349-35.425c-95.561-32.937-213.109-88.767-349.378-165.94 C326.902,202.439,118.264,52.681,116.184,51.184',
  'M2325.012,434.838c-2.342-0.943-237.129-95.159-490.845-168.261 c-148.999-42.93-275.27-70.285-375.305-81.305c-124.931-13.761-209.003-1.947-249.884,35.114 c-29.908,27.114-37.029,68.322-21.166,122.481c13.583,46.376,18.386,85.281,14.273,115.637 c-3.885,28.674-15.817,50.462-35.465,64.759c-19.42,14.131-46.636,21.193-81.424,21.193c-44.617,0-101.698-11.606-170.849-34.805 c-98.354-32.995-221.225-89.375-365.201-167.574C304.028,208.944,79.694,56.63,77.456,55.107',
  'M2325.461,451.134c-2.464-0.979-249.408-98.851-513.014-175.574 c-154.808-45.057-284.979-74.11-386.9-86.354c-127.276-15.289-210.534-4.268-247.467,32.756 c-26.955,27.021-29.5,68.492-7.566,123.26c19.087,47.658,28.517,87.659,28.027,118.89c-0.462,29.507-9.782,51.958-27.701,66.729 c-17.835,14.703-44.408,22.05-79.512,22.05c-44.008,0-101.423-11.545-171.843-34.616C818.324,485.133,690.202,428.268,538.68,349.26 C280.712,214.749,41.118,60.571,38.728,59.029',
  'M2325.91,467.43c-2.578-1.016-261.005-102.51-534.094-182.977 c-160.378-47.255-294.352-78.119-398.199-91.731c-129.671-16.997-212.391-7.007-245.865,29.692 c-24.642,27.017-22.806,69.129,5.459,125.168c24.721,49.012,38.809,90.123,41.873,122.193c2.895,30.295-3.964,53.323-20.386,68.442 c-16.22,14.934-41.971,22.397-77.019,22.397c-43.689,0-101.833-11.588-174.057-34.751 c-104.008-33.357-237.312-90.651-396.209-170.29C256.891,219.988,2.537,64.506,0,62.951',
  'M2340.309,488.28c-2.62-1.051-265.259-106.097-542.258-190.36 c-162.675-49.486-298.394-82.226-403.386-97.311c-131.098-18.835-214.308-10.056-247.318,26.097 c-23.768,26.03-21.705,66.857,6.132,121.349c25.254,49.354,39.819,90.637,43.29,122.704c3.277,30.276-3.242,53.138-19.375,67.95 c-15.317,14.062-39.473,21.089-72.277,21.089c-42.863,0-100.493-11.994-172.478-35.957 c-101.537-33.802-231.754-91.356-387.033-171.065C281.243,217.071,32.529,62.071,30.048,60.521',
  'M2354.708,509.132c-2.663-1.087-269.52-109.707-550.43-197.792 c-164.972-51.731-302.434-86.36-408.567-102.927c-132.52-20.684-216.211-13.121-248.748,22.481 c-22.914,25.075-20.633,64.652,6.782,117.634c25.799,49.7,40.852,91.157,44.74,123.218c3.668,30.252-2.5,52.939-18.333,67.433 c-14.427,13.206-37.044,19.805-67.661,19.805c-41.998,0-99.058-12.406-170.773-37.196 c-99.069-34.246-226.206-92.058-377.878-171.832C305.618,214.141,62.52,59.635,60.094,58.091',
  'M2369.107,529.984c-2.705-1.123-273.784-113.341-558.605-205.271 c-167.27-53.989-306.473-90.52-413.743-108.576c-133.939-22.545-218.104-16.206-250.155,18.846 c-22.083,24.149-19.589,62.511,7.41,114.018c26.354,50.054,41.905,91.685,46.222,123.733c4.07,30.224-1.736,52.729-17.259,66.892 c-13.556,12.368-34.671,18.548-63.171,18.548c-41.09,0-97.544-12.833-168.941-38.469c-96.608-34.688-220.673-92.756-368.749-172.589 C330.015,211.199,92.511,57.201,90.141,55.661',
  'M2383.505,550.834c-2.747-1.159-278.055-116.996-566.786-212.796 c-169.566-56.261-310.509-94.703-418.913-114.258c-135.355-24.417-219.985-19.306-251.542,15.193 c-21.271,23.254-18.574,60.432,8.016,110.501c26.919,50.413,42.98,92.217,47.737,124.25c4.483,30.19-0.951,52.506-16.15,66.324 c-12.703,11.55-32.354,17.318-58.811,17.318c-40.139,0-95.949-13.272-166.979-39.776c-94.15-35.13-215.152-93.449-359.644-173.337 C354.437,208.244,122.503,54.765,120.189,53.231',
  'M2397.904,571.686c-2.789-1.195-282.33-120.674-574.972-220.364 c-171.863-58.547-314.544-98.912-424.078-119.974c-136.764-26.297-221.854-22.422-252.907,11.521 c-20.48,22.387-17.587,58.413,8.601,107.077c27.495,50.777,44.078,92.756,49.288,124.769c4.907,30.153-0.142,52.269-15.006,65.731 c-30.842,27.939-104.682,19.526-219.466-25.001c-91.697-35.57-209.644-94.138-350.563-174.074 C378.882,205.278,152.494,52.329,150.235,50.8',
  'M2412.303,592.535c-2.832-1.231-286.611-124.372-583.162-227.976 c-174.16-60.844-318.576-103.142-429.238-125.719c-138.17-28.19-223.713-25.555-254.252,7.831 c-19.71,21.547-16.627,56.452,9.164,103.747c28.082,51.147,45.199,93.3,50.874,125.286c5.342,30.11,0.69,52.017-13.825,65.111 c-29.706,26.798-101.417,17.53-213.143-27.548c-89.248-36.011-204.149-94.822-341.509-174.803 C403.354,202.299,182.486,49.894,180.282,48.37',
  'M2426.701,613.387c-2.874-1.269-290.895-128.092-591.355-235.628 c-176.455-63.155-322.605-107.397-434.391-131.497c-139.572-30.092-225.561-28.704-255.58,4.124 c-18.96,20.733-15.695,54.548,9.706,100.505c28.681,51.522,46.343,93.85,52.497,125.804c5.789,30.062,1.548,51.75-12.604,64.463 c-28.56,25.657-98.145,15.53-206.818-30.101c-86.805-36.447-198.668-95.501-332.483-175.519 C427.852,199.307,212.478,47.458,210.329,45.94',
  'M2441.101,634.238c-2.917-1.305-295.184-131.831-599.552-243.321 c-178.752-65.478-326.634-111.673-439.54-137.303c-140.968-32-227.398-31.867-256.889,0.398 c-18.229,19.946-14.789,52.7,10.228,97.352c29.29,51.902,47.512,94.403,54.157,126.321c6.248,30.007,2.432,51.468-11.343,63.784 c-27.411,24.512-94.864,13.524-200.493-32.654c-84.366-36.885-193.202-96.176-323.484-176.226 C452.379,196.303,242.47,45.021,240.376,43.509',
  'M2455.5,655.089c-2.96-1.342-299.475-135.59-607.751-251.055 c-181.047-67.812-330.659-115.97-444.682-143.138c-142.363-33.919-229.228-35.044-258.18-3.342 c-17.519,19.183-13.909,50.903,10.728,94.282c29.911,52.288,48.704,94.962,55.856,126.836c6.719,29.948,3.342,51.17-10.039,63.077 c-26.25,23.361-91.578,11.514-194.165-35.212c-81.933-37.317-187.752-96.842-314.516-176.919 C476.934,193.288,272.463,42.585,270.422,41.079',
  'M2469.899,675.94c-3.002-1.38-303.768-139.367-615.951-258.825 c-183.342-70.157-334.683-120.288-449.819-149c-143.751-35.848-231.046-38.238-259.456-7.1 c-16.827,18.443-13.055,49.159,11.209,91.294c30.544,52.679,49.921,95.525,57.595,127.35c7.205,29.882,4.281,50.855-8.69,62.339 c-25.083,22.206-88.28,9.5-187.836-37.77c-79.506-37.75-182.317-97.504-305.579-177.602 C501.519,190.26,302.455,40.148,300.469,38.648',
  'M2484.299,696.791c-3.044-1.417-308.064-143.162-624.153-266.633 c-185.637-72.514-338.704-124.626-454.953-154.891c-145.141-37.788-232.858-41.445-260.715-10.875 c-16.154,17.727-12.227,47.464,11.671,88.388c31.187,53.072,51.164,96.091,59.374,127.858c7.703,29.81,5.249,50.523-7.294,61.568 c-23.909,21.053-84.977,7.483-181.506-40.327c-77.084-38.18-176.899-98.158-296.672-178.271 C526.136,187.22,332.448,37.711,330.516,36.217',
  'M2498.698,717.642c-3.087-1.455-312.364-146.976-632.356-274.477 c-187.93-74.88-342.723-128.983-460.08-160.807c-146.525-39.733-234.66-44.667-261.96-14.664 c-15.499,17.032-11.423,45.818,12.113,85.559c31.843,53.473,52.432,96.661,61.194,128.365c8.217,29.729,6.249,50.174-5.849,60.765 c-22.725,19.896-81.662,5.466-175.174-42.883c-74.668-38.605-171.498-98.805-287.799-178.926 C550.785,184.169,362.441,35.274,360.562,33.786',
  'M2513.098,738.493c-3.13-1.493-316.665-150.806-640.561-282.354 c-190.222-77.257-346.738-133.36-465.201-166.749c-147.902-41.686-236.453-47.899-263.191-18.47 c-14.862,16.359-10.644,44.219,12.537,82.806c32.51,53.876,53.727,97.233,63.058,128.867c8.745,29.643,7.28,49.806-4.353,59.928 c-21.529,18.733-78.336,3.448-168.839-45.437c-72.258-39.029-166.114-99.445-278.96-179.568 c-192.12-136.41-375.154-284.68-376.98-286.162',
  'M2527.497,759.344c-3.172-1.531-320.968-154.651-648.765-290.266 c-192.514-79.645-350.751-137.755-470.317-172.716c-149.282-43.65-238.241-51.149-264.408-22.291 c-14.243,15.707-9.889,42.666,12.942,80.127c33.189,54.283,55.047,97.808,64.964,129.362c9.288,29.549,8.344,49.419-2.804,59.057 c-20.328,17.575-75.002,1.432-162.503-47.984c-69.855-39.45-160.748-100.077-270.155-180.197 C600.186,178.031,422.428,30.398,420.654,28.923',
  'M2541.896,780.196c-3.214-1.568-325.271-158.514-656.968-298.209 c-194.804-82.043-354.762-142.169-475.429-178.708c-150.655-45.619-240.019-54.409-265.613-26.127 c-13.642,15.075-9.157,41.156,13.329,77.52c33.88,54.695,56.394,98.384,66.917,129.853c9.846,29.447,9.443,49.012-1.199,58.15 c-19.118,16.414-71.659-0.584-156.165-50.527c-67.458-39.867-155.4-100.701-261.387-180.811 C624.94,174.947,452.422,27.96,450.7,26.491',
  'M2556.295,801.047c-3.257-1.607-329.576-162.391-665.171-306.185 c-197.094-84.449-358.77-146.599-480.536-184.723c-152.025-47.598-241.792-57.685-266.805-29.978 c-13.057,14.461-8.448,39.688,13.699,74.981c34.583,55.11,57.768,98.961,68.913,130.334c10.422,29.339,10.578,48.587,0.465,57.209 c-17.896,15.256-68.302-2.596-149.823-53.062c-65.067-40.28-150.073-101.315-252.657-181.41 C649.73,171.852,482.416,25.522,480.746,24.059',
]

const Waves = ({ onComplete = () => {}, ...props }) => {
  const el = useRef()

  useEffect(() => {
    const stageWidth = 2557.36 - 900
    const stageHeight = 802.3

    const stage = new Konva.Stage({
      container: el.current,
      width: stageWidth,
      height: stageHeight,
    })

    function fitStageIntoParentContainer() {
      const container = el.current
      const containerWidth = container.offsetWidth
      const scale = containerWidth / stageWidth

      stage.width(stageWidth * scale)
      stage.height(stageHeight * scale)
      stage.scale({ x: scale, y: scale })
      stage.draw()
    }

    const layer = new Konva.Layer()

    const konvaPaths = paths.map(data => {
      const path = new Konva.Path({
        data,
        x: -350,
        y: 0,
        // scale: { x: 2, y: 2 },
        strokeWidth: 1,
        strokeLinearGradientStartPoint: { x: 0, y: 0 },
        strokeLinearGradientEndPoint: { x: stageWidth, y: stageHeight },
        strokeLinearGradientColorStops: [
          0,
          '#91742d',
          0.46,
          '#b4903a',
          0.55,
          '#fffea6',
          0.65,
          '#b4903a',
          1,
          '#91742d',
        ],
      })

      const pathLen = path.getLength() + 30
      path.dashOffset(-pathLen)
      path.dash([pathLen])

      layer.add(path)
      stage.add(layer)

      return path
    })

    const tl = new TimelineMax({ delay: 1, onComplete })

    tl.from(el.current, 5, { y: -300, ease: Power4.easeOut }, 0)
    tl.staggerTo(
      konvaPaths,
      4,
      {
        konva: { x: '-=290', y: 0, dashOffset: 0 },
        ease: Back.easeOut.config(1),
      },
      0.05,
      0
    )

    tl.timeScale(1.5)

    fitStageIntoParentContainer()
    window.addEventListener('resize', fitStageIntoParentContainer)

    return () => {
      window.removeEventListener('resize', fitStageIntoParentContainer)
    }
  }, []) // eslint-disable-line

  return <div ref={el} {...props}></div>
}

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AutoSlide up delay={200}>
        <ButtonLink
          as="button"
          onClick={() => setIsOpen(true)}
          className="mt-8 outline-none"
          css={{ [media.max.tabletMd]: { fontSize: 11 } }}
          icon={
            <svg
              viewBox="0 0 150 150"
              className="w-6 h-6 ml-3 -mr-5 fill-current"
            >
              <path d="M75 0C33.65 0 0 33.65 0 75s33.65 75 75 75 75-33.65 75-75S116.36 0 75 0zm33.67 77.25l-50.73 39.31a3.66 3.66 0 01-5.92-2.86V35.08a3.66 3.66 0 015.92-2.85l50.73 39.3a3.6 3.6 0 010 5.72z" />
            </svg>
          }
        >
          WATCH VIRTUAL KEYNOTE DEMO
        </ButtonLink>
      </AutoSlide>
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full ease-out transition-slow"
        style={
          isOpen
            ? { visibility: 'visible', opacity: 1 }
            : { visibility: 'hidden', opacity: 0 }
        }
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        />
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-0 right-0 block p-5 text-4xl leading-none text-white transition hover:text-gold-300 focus:outline-none"
        >
          &times;
        </button>
        <div
          className="w-4/5 ease-out transition-slow"
          style={{
            transform: isOpen ? 'scale(1)' : 'scale(.9)',
            pointerEvents: isOpen ? 'all' : 'none',
          }}
        >
          <div
            className="relative w-full h-0 mt-10"
            css={{ paddingTop: '56.25%' }}
          >
            <iframe
              src={`https://player.vimeo.com/video/264657556?color=b4903a${
                isOpen ? '&autoplay=1' : ''
              }`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Watch The Experience"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full bg-black"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const CrazyShenanigans = ({ video, videoPoster }) => {
  const [wavesCompleted, setWavesCompleted] = useState(false)
  const [inViewRef, inView] = useInView({ rootMargin: '-40% 0px' })
  const isTablet = useMedia('(min-width: 768px)')

  useEffect(() => {
    if (!isTablet) return

    inView && wavesCompleted
      ? videoRef.current.play()
      : videoRef.current.pause()
  }, [inView, wavesCompleted])

  const videoRef = useRef()

  return (
    <>
      {isTablet ? (
        <>
          <video
            ref={ref => {
              inViewRef(ref)
              videoRef.current = ref
            }}
            src={video}
            poster={videoPoster}
            playsInline
            loop
            muted
            className="absolute top-0 left-0 object-cover w-full h-full"
          ></video>
          <Waves
            className="absolute left-0 w-full pointer-events-none"
            css={{ bottom: '-20vw' }}
            onComplete={() => setWavesCompleted(true)}
          />
        </>
      ) : (
        <img
          src={videoPoster}
          alt=""
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      )}
    </>
  )
}

const Numbers = () => {
  const [inViewRef, inView] = useInView()

  useEffect(() => {
    if (inView) {
      const countUp1 = new CountUp(n1.current, 314, {
        // startVal: 314 - 27,
        duration: 3,
      })
      countUp1.start()

      const countUp2 = new CountUp(n2.current, 27, {
        // startVal: 27 - 27,
        duration: 3,
      })
      countUp2.start()

      const countUp3 = new CountUp(n3.current, 81, {
        // startVal: 81 - 27,
        duration: 3,
      })
      countUp3.start()

      const countUp4 = new CountUp(n4.current, 43, {
        // startVal: 43 - 27,
        duration: 3,
      })
      countUp4.start()
    }
  }, [inView])

  const n1 = useRef()
  const n2 = useRef()
  const n3 = useRef()
  const n4 = useRef()

  return (
    <section
      ref={inViewRef}
      className="relative flex-col items-center hidden py-20 bg-black lg:flex"
    >
      <Container as="ul" className="flex">
        <AutoFade delay={0 * 150} className="flex-1 text-center">
          <div className="text-white" css={{ fontSize: 78 }}>
            <span ref={n1}></span>M
          </div>
          <p className="text-white">Over 314,000,000 Attendees Impacted</p>
        </AutoFade>
        <AutoFade delay={1 * 150} className="flex-1 text-center">
          <div className="text-white" css={{ fontSize: 78 }}>
            <span ref={n2}></span>
          </div>
          <p className="text-white">Topics Addressed</p>
        </AutoFade>
        <AutoFade delay={2 * 150} className="flex-1 text-center">
          <div className="text-white" css={{ fontSize: 78 }}>
            <span ref={n3}></span>
          </div>
          <p className="text-white">Countries for Live Presentations</p>
        </AutoFade>
        <AutoFade delay={3 * 150} className="flex-1 text-center">
          <div className="text-white" css={{ fontSize: 78 }}>
            <span ref={n4}></span>,000
          </div>
          <p className="mx-auto text-white" css={{ maxWidth: '20em' }}>
            Years from when the first musical instrument was found
          </p>
        </AutoFade>
      </Container>
    </section>
  )
}

const IndexPage = ({ data }) => (
  <>
    <SEO />
    <section
      className="relative flex flex-col items-center h-screen text-white"
      css={{
        backgroundColor: '#2a282a',
        [media.tabletMd]: { height: 'calc(50vh + 28vw)' },
      }}
    >
      <CrazyShenanigans
        video={headerBg}
        videoPoster={data.headerBgPoster.childImageSharp.fixed.src}
      />
      <div className="top-0 left-0 order-last w-full mt-auto overflow-hidden pointer-events-none md:h-full md:absolute md:order-first md:mt-0">
        <AutoScale
          up
          delay={300}
          duration={2000}
          css={{
            width: '80vw',
            margin: '2rem 0 -10vw 5vw',
            [media.tabletMd]: {
              margin: 0,
              position: 'absolute !important',
              width: '45vw',
              left: '-15vw',
              bottom: '-9vw',
            },
          }}
        >
          <Img
            fluid={data.freddieHero.childImageSharp.fluid}
            loading="eager"
            imgStyle={{ objectPosition: 'center top' }}
          />
        </AutoScale>
      </div>
      <Container
        className="relative flex flex-col items-center h-full"
        css={{ marginTop: 'calc(16vh + 10vw)' }}
      >
        <AutoSlide
          up
          delay={100}
          className="font-hairline leading-tight text-center font-display"
          css={{ fontSize: '8vw', [media.tabletMd]: { fontSize: '3vw' } }}
        >
          {/* <RotateWords
            words={['AMPLIFY CLARITY', 'CONNECTIVITY', 'STRENGTH', 'SUCCESS']}
          /> */}
          <h2>AMPLIFY YOUR SUCCESS</h2>
          <p className="mt-2 text-2xl text-white font-body">
            Music principles to empower daily life.
          </p>
        </AutoSlide>
        <Demo />
        <AutoSlide
          as="ul"
          up
          delay={300}
          className="absolute bottom-0 mt-8 mb-10"
          css={{
            display: 'none',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: 10,
            [media.tablet]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            [media.laptop]: {
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridGap: '1vw',
            },
            li: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#efefef',
              padding: '5vw',
              [media.laptop]: {
                padding: '2vw',
              },
            },
            img: {
              display: 'block',
              width: '20vw',
              height: '12vw',
              objectFit: 'contain',
              filter: 'invert(1)',
              [media.laptop]: {
                width: '8.5vw',
                height: '8.5vw',
              },
            },
          }}
        >
          <AutoScale as="li">
            <img src={microsoft} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={nasa} alt=""style={{ transform: 'scale(.75)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={amazonMusic} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={disney} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={bluesCross} alt="" style={{ transform: 'scale(.6)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={apple} alt="" style={{ transform: 'scale(.55)' }} />
          </AutoScale>
        </AutoSlide>
      </Container>
    </section>
    <section className="pb-20 bg-white">
      <div css={{ height: '11vw' }}></div>
      <Container className="flex flex-col items-center lg:hidden">
        <AutoFade>
          <h3
            className="relative text-xl font-hairline leading-tight text-center text-gray-700 uppercase font-display sm:text-3xl"
            css={{ maxWidth: '27em' }}
          >
            Featured Clients
          </h3>
        </AutoFade>
        <ul
          className="mt-8 mb-10"
          css={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: 10,
            [media.tablet]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            [media.laptop]: {
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridGap: '1vw',
            },
            li: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: '#efefef',
              padding: '5vw',
              [media.laptop]: {
                padding: '2vw',
              },
            },
            img: {
              display: 'block',
              width: '20vw',
              height: '12vw',
              objectFit: 'contain',
              opacity: 0.5,
              // [media.tablet]: {
              //   width: '6.5vw',
              //   height: '6.5vw',
              // },
              [media.laptop]: {
                width: '8.5vw',
                height: '8.5vw',
              },
            },
          }}
        >
          <AutoScale as="li">
            <img src={tiktok} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={peloton} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={amazonMusic} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={disney} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={bluesCross} alt="" style={{ transform: 'scale(.6)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={apple} alt="" style={{ transform: 'scale(.55)' }} />
          </AutoScale>
        </ul>
      </Container>
    </section>
    <section className="pb-20 bg-white">
      <Container className="flex flex-col items-center">
        <div
          css={{
            width: '100%',
            display: 'grid',
            gridGap: 30,
            [media.tabletLg]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          }}
        >
          <AutoSlide
            up
            translate="50"
            duraiton={2000}
            delay={150}
            className="flex-col items-center"
            css={{ display: 'flex' }}
          >
            <Img
              className="w-full h-48 xl:h-64"
              fluid={data.expert.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
            <h3 className="mt-5 text-xl leading-tight text-center text-gray-700 uppercase font-display xl:text-3xl">
              Communication
              <br />
              expert
            </h3>
            <p
              className="hidden mt-5 text-center text-gray-600 md:block"
              css={{ maxWidth: '20em' }}
            >
              1+1=11 when your audience discovers music’s most persuasive
              communication techniques to stand out, establish trust and WIN.
            </p>
          </AutoSlide>
          <AutoSlide
            up
            translate="50"
            duraiton={2000}
            className="flex-col items-center"
            css={{ display: 'flex' }}
          >
            <Img
              className="w-full h-48 xl:h-64"
              fluid={data.speaker.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
            <h3 className="mt-5 text-xl leading-tight text-center text-gray-700 uppercase font-display xl:text-3xl">
              Business
              <br />
              speaker
            </h3>
            <p
              className="hidden mt-5 text-center text-gray-600 md:block"
              css={{ maxWidth: '20em' }}
            >
              From directing the best bands to elevating the best brands, Ravel
              reveals what Music is to what Business does.
            </p>
          </AutoSlide>
          <AutoSlide
            up
            translate="50"
            duraiton={2000}
            delay={150}
            className="flex-col items-center"
            css={{ display: 'flex' }}
          >
            <Img
              className="w-full h-48 xl:h-64"
              fluid={data.performer.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
            <h3 className="mt-5 text-xl leading-tight text-center text-gray-700 uppercase font-display xl:text-3xl">
              Award-Winning
              <br />
              performer
            </h3>
            <p
              className="hidden mt-5 text-center text-gray-600 md:block"
              css={{ maxWidth: '20em' }}
            >
              Unleash and Inspire the inner Rock Star of your people with the
              most powerful motivational force on the planet.
            </p>
          </AutoSlide>
        </div>
        <ButtonLink to="/about" className="mt-16">
          READ FREDDIE’S BIO
        </ButtonLink>
      </Container>
    </section>
    <section className="relative pt-20 pb-32 bg-gray-900">
      <Img
        fluid={data.videoBg.childImageSharp.fluid}
        className="top-0 left-0 w-full h-full"
        css={{ position: 'absolute !important' }}
      />
      <Container>
        <AutoFade
          as="h3"
          className="relative text-xl font-hairline leading-tight text-center uppercase font-display sm:text-3xl"
          css={{
            backgroundImage:
              'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PREVIEW VIRTUAL KEYNOTE
        </AutoFade>
        <AutoFade className="w-full mx-auto sm:w-4/5">
          <VideoPlayer
            // label="Watch speaking demo"
            webroll={bgVideoColor}
            video={
              <iframe
                src="https://player.vimeo.com/video/517438226?autoplay=1&color=b4903a"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="WATCH VIRTUAL KEYNOTE DEMO"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full bg-black"
              />
            }
            ratio={1080 / 1920}
            className="mt-16"
          />
        </AutoFade>
      </Container>
    </section>
    <Numbers />
    <section className="relative py-20 pb-24 bg-white">
      <Container className="flex flex-col items-center">
        <AutoFade>
          <h3
            className="relative text-xl font-hairline leading-tight text-center text-gray-700 uppercase font-display sm:text-3xl"
            css={{ maxWidth: '27em' }}
          >
            "ROCKED US WITH RELEVANCE, HOPE AND VALUE"
          </h3>
          <img
            src={AIAHongkong}
            alt=""
            className="mx-auto mt-5 opacity-50"
            css={{ maxWidth: 150 }}
          />
        </AutoFade>
        <ul
          className="mt-16 mb-10"
          css={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: 10,
            [media.tablet]: {
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
            [media.laptop]: {
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridGap: '1vw',
            },
            li: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#222',
              padding: '6vw',
              [media.laptop]: {
                padding: '3vw',
              },
            },
            img: {
              display: 'block',
              width: '20vw',
              height: '12vw',
              objectFit: 'contain',
              opacity: 1,
              filter: 'invert(1)',
              // [media.tablet]: {
              //   width: '6.5vw',
              //   height: '6.5vw',
              // },
              [media.laptop]: {
                width: '6.5vw',
                height: '6.5vw',
              },
            },
          }}
        >
          <AutoScale as="li">
            <img src={redbull} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={citi} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={ibm} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={google} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={disney} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={nasa} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={walmart} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={nbc} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={toyota} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={twitter} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={universal} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={ted} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={apple} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={aia} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={prudential} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={grammy} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={bluesCross} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={livenation} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={tiktok} alt="" style={{ transform: 'scale(1.1)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={peloton} alt="" style={{ transform: 'scale(1.3)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={amazonMusic} alt="" style={{ transform: 'scale(1.3)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={PNCBank} alt="" style={{ transform: 'scale(1.3)' }} />
          </AutoScale>
          <AutoScale as="li">
            <img src={warnerBros} alt="" />
          </AutoScale>
          <AutoScale as="li">
            <img src={COXMedia} alt="" />
          </AutoScale>
        </ul>
        <AutoFade>
          <ButtonLink to="/contact" className="hidden mt-6 md:block">
            BOOK FREDDIE NOW
          </ButtonLink>
        </AutoFade>
      </Container>
    </section>
    <ClientRaves />
    <section
      className="relative py-20 bg-gray-900"
      css={{ paddingBottom: '17vh' }}
    >
      <Img
        fluid={data.goldRibbon.childImageSharp.fluid}
        className="bottom-0 left-0 w-11/12 h-full -mb-3"
        css={{ position: 'absolute !important' }}
        imgStyle={{ objectFit: 'contain', objectPosition: 'left bottom' }}
      />
      <Container className="relative flex flex-col md:flex-row">
        <div className="flex-1">
          <AutoFade>
            <h3
              className="relative mt-6 text-xl font-bold leading-none uppercase font-display sm:text-4xl"
              css={{
                // maxWidth: '37ex',
                [media.laptopMd]: {
                  width: '120%',
                },
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VIRTUAL ROCKSTAR SPEAKER & SUCCESS AMPLIFIER
            </h3>
          </AutoFade>
          <AutoFade>
            <p
              className="mt-8 text-3xl leading-snug text-white font-body"
              css={{ maxWidth: '38ex' }}
            >
              Discover Freddie’s proven and effective key strategies to solve
              problems and empower YOU to get back in rhythm to what matters
              most.
            </p>
          </AutoFade>
          <AutoFade>
            <ButtonLink to="/" className="inline-flex mt-8 text-white">
              BOOK NOW ON STAGE OR ONLINE
            </ButtonLink>
          </AutoFade>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <div
            css={{
              maxHeight: '100vh',
              display: 'grid',
              gridTemplate: '1fr .5fr .5fr 1fr / repeat(12, 1fr)',
            }}
          >
            <Img
              fluid={data.ns1.childImageSharp.fluid}
              className=""
              css={{ gridRow: '2 / 4', gridColumn: '1 / 8', zIndex: 1 }}
            />
            <Img
              fluid={data.ns2.childImageSharp.fluid}
              className=""
              css={{ gridRow: '1 / 3', gridColumn: '4 / 11' }}
            />
            <Img
              fluid={data.ns3.childImageSharp.fluid}
              className=""
              css={{ gridRow: '3 / 5', gridColumn: '5 / 13' }}
            />
          </div>
        </div>
      </Container>
    </section>
    {/* <section className="relative py-20 bg-black">
      <Container className="flex flex-col items-center">
        <AutoFade>
          <img src={signet} alt="" className="w-24 h-24 text-white" />
        </AutoFade>
        <AutoFade>
          <h3
            className="relative mt-6 text-xl font-hairline leading-tight text-center uppercase font-display sm:text-3xl"
            css={{
              maxWidth: '16em',
              backgroundImage:
                'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DISCOVER YOUR
            <br />
            LIFE IN TUNE
          </h3>
        </AutoFade>
        <AutoFade>
          <p className="mt-5 text-center text-white" css={{ maxWidth: '34em' }}>
            GET L.I.T. with the Life in Tune™ system that’s harnessed a
            revolution of solutions by conducting life through Music’s three key
            elements.
          </p>
        </AutoFade>
        <AutoFade>
          <ButtonLink to="/mission" className="mt-6 text-white">
            Watch Our Mission
          </ButtonLink>
        </AutoFade>
        <MissionRings className="w-1/3 mt-16" />
      </Container>
    </section> */}
    <section className="relative flex flex-col items-center py-20 pb-24 bg-white">
      <Img
        fluid={data.keynoteBg.childImageSharp.fluid}
        className="top-0 left-0 w-full h-full"
        css={{ position: 'absolute !important' }}
      />
      <Container>
        <AutoFade>
          <h3 className="relative text-xl font-hairline leading-tight text-center text-gray-700 uppercase font-display sm:text-3xl">
            Featured Programs
          </h3>
        </AutoFade>
        <ul className="relative flex flex-col mt-12 -m-5 lg:flex-row">
          <AutoFade
            as="li"
            delay={0 * 100}
            className="flex flex-col flex-1 px-5 py-10 m-5 text-gray-900 bg-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Rhythm of Success</h4>
            <p className="mt-5">
              The Rhythm of Success is a one-of-a-kind program designed to
              challenge and inspire organizations to discover their untapped
              potential through the power of Active Listening.
            </p>
            <ButtonLink
              to="/programs#the-rhythm-of-success"
              className="self-center mt-10"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={1 * 100}
            className="flex flex-col flex-1 px-5 py-10 m-5 text-gray-900 bg-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">The Music of Leadership</h4>
            <p className="mt-5">
              This presentation takes your audience on a deep dive into the role
              of "melody" within music and its’ power as the central message to
              bring life to your products and services.
            </p>
            <ButtonLink
              to="/programs#the-music-of-leadership"
              className="self-center mt-10"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={2 * 100}
            className="flex flex-col flex-1 px-5 py-10 m-5 text-gray-900 bg-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Getting in Tune With ESG</h4>
            <p className="mt-5">
              This interactive experience takes your audience into what
              disruption actually sounds like and then, through revealing
              techniques to overcome adversity, transforms dissonance to
              resolution.
            </p>
            <ButtonLink
              to="/programs#getting-in-tune-with-esg"
              className="self-center mt-10"
            >
              LEARN MORE
            </ButtonLink>
          </AutoFade>
          <AutoFade
            as="li"
            delay={3 * 100}
            className="flex flex-col flex-1 px-5 py-10 m-5 text-gray-900 bg-white"
            css={{ display: 'flex' }}
          >
            <h4 className="text-xl leading-none">Teamwork</h4>
            <p className="mt-5">
              This collaborative discussion unlocks the power of human harmonics
              organizations need to gain a distinct advantage in today’s
              hypercompetitive marketplace.
            </p>
            <ButtonLink to="/programs#teamwork" className="self-center mt-10">
              LEARN MORE
            </ButtonLink>
          </AutoFade>
        </ul>
      </Container>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
