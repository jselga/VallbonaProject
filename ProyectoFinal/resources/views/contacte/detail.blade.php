@extends('layout')

@section('title', 'Llistat de contactes')

@section('stylesheets')
<link rel="stylesheet" href="{{ asset('css/contacteDetail.css') }}" />
@parent
@endsection

@section('content')
<div class="titulo">
    <h1>{{ $contacte->name }}</h1>
</div>
<div class="containerContacte">
    <div>
        <div class="labels">
            <div class="infoContacte">
                <div class="list-header">
                    <div id="info">Info contacte</div>
                    <div class="filtro"><button class="filtrar" data-bs-toggle="modal" data-bs-target="#editInfo">Editar Informacio</button></div>
                </div>
                <table id="info-table" class="table table-striped table-dark">
                    <tr>
                        <th scope="row">Nom contacte</th>
                        <td>{{ $contacte->name }}</td>
                    </tr>
                    <tr>
                        <th>Empresa</th>
                        <td>{{ $contacte->empresa->name }}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ $contacte->email }}</td>
                    </tr>
                    <tr>
                        <th>Telefon</th>
                        <td>{{ $contacte->phonenumber }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="editInfo" tabindex="-1" aria-labelledby="editInfoLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editInfoLabel">Editar empresa</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="POST" action="{{ route('contacte_edit', $contacte->id) }}">
                <div class="modal-body">
                    @csrf
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="name">Nom</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <input class="form-control" type="text" name="name" value="{{ $contacte->name }}" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="empresa_id">Empresa</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <select class="form-select" name="empresa_id" value="{{ $contacte->empresa_id }}">
                                @foreach($empresas as $empresa)
                                    @if ($empresa->id == $contacte->empresa_id)
                                        <option value="{{ $empresa->id }}" selected>{{ $empresa->name }}</option>
                                    @else
                                        <option value="{{ $empresa->id }}">{{ $empresa->name }}</option>
                                    @endif
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="email">Email</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <input class="form-control" type="text" name="email" value="{{ $contacte->email }}" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="phonenumber">Telefon</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <input class="form-control" type="text" name="phonenumber" value="{{ $contacte->phonenumber }}" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary">Confirmar</button>
                </div>
            </form>
        </div>
    </div>
</div>
<br>
@endsection