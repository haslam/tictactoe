import React from 'react'

export default () => (
  <div className='list-wrapper'>
    <style jsx>{`
      .list-wrapper {
        align-items: center;
        background: none;
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      .list-container {
        background-color: teal;
        padding: 1em 2em;
        > li {
          background-color: aliceblue;
        }
      }

      `}
    </style>
    <div className='list-container'>
      <ul>
        <li>
          List item 1
        </li>
        <li>
          List item 2
        </li>
        <li>
          List item 3
        </li>
      </ul>
    </div>

  </div>
)
