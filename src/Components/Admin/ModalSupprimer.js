import React from 'react'
import Supprimer from './Admin_Img/Supprimer.svg'
function ModalSupprimer({verife}) {
    return (
<div><img src={Supprimer} data-toggle="modal" data-target="#exampleModal"/>



<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <p>Est ce que vous voulez supprimer {verife==="Professeur"? "ce" : "cet"} {verife} ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn2" data-dismiss="modal">Supprimer</button>
      <button type="button" class="btn btn-secondary">Annuler</button>
    </div>
  </div>
</div>
</div></div>

        
    )
}

export default ModalSupprimer
