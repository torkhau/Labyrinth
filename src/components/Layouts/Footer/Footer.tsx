import './Footer.css'

export function Footer() {
  return (
      <footer>
        <h2>Connect with me</h2>
        <a href='https://github.com/torkhau' target='_blank'>
          <svg className='button-icon' role='presentation' aria-hidden='true'>
            <use href='/icons.svg#github-icon'></use>
          </svg>
          GitHub
        </a>
      </footer>
  )
}