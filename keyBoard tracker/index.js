const key = document.getElementById('insert');
window.addEventListener('keydown',(e)=>
key.innerHTML = `

<div class="color">
<table>
  <tr>
    <th>Key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "? 'Space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`
)