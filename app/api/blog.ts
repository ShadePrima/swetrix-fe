/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios'
import Debug from 'debug'
import _isEmpty from 'lodash/isEmpty'
import { BLOG_URL } from 'redux/constants'

const debug = Debug('swetrix:blog')

const api = axios.create({
  baseURL: BLOG_URL,
})

export const getLastPost = () =>
  api
    .get('last-post?format=json')
    .then((response): {
      title: string
      url_path: string
    } => response.data)
    .catch((error) => {
      debug('%s', error)
      throw _isEmpty(error.response.data?.message)
        ? error.response.data
        : error.response.data.message
    })
