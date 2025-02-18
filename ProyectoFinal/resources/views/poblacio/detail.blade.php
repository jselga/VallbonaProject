@extends('layout')

@section('title', $poblacio->name)

@section('stylesheets')
    <link rel="stylesheet" href="{{ asset('css/poblacioDetail.css') }}" />
    @parent
@endsection

@section('content')

<div class="titulo">
    <h1>{{ $poblacio->name }}</h1>
</div>

<div class="containerPoblacio">
    <div>
        <div class="btnTorna">
            <a href="{{ route('poblacio_list') }}"><i class="bi bi-arrow-left-circle-fill"></i> {{ trans('translation.back') }}</a>
        </div>
        <div class="labels">
            <div class="infoPoblacio">
                <div class="list-header">
                    <div id="info">{{ trans('translation.info') }}</div>
                    <div class="filtro"><button class="filtrar" data-bs-toggle="modal" data-bs-target="#editInfo">{{ trans('translation.edit') }}</button></div>
                </div>
                <table id="info-table" class="table table-striped table-dark">
                    <tr>
                        <th scope="row">{{ trans('translation.name') }}</th>
                        <td>{{ $poblacio->name }}</td>
                    </tr>
                    <tr>
                        <th scope="row">{{ trans('translation.comarca') }}</th>
                        <td>{{ $poblacio->comarca->name }}</td>
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
                <h5 class="modal-title" id="editInfoLabel">{{ trans('translation.edit').' '.trans('translation.city') }}</h5>
                <button type="button" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg"></i></button>
            </div>
            <form method="POST" name="editPoblacioForm" action="{{ route('poblacio_edit', $poblacio->id) }}">
                <div class="modal-body">
                    @csrf
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="name">{{ trans('translation.name') }}</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <input class="form-control" type="text" name="name" value="{{ $poblacio->name }}" />
                        </div>
                        <div class="error" id="name-edit-poblacio-error"></div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 col-sm-2">
                            <label class="col-form-label" for="comarca_id">{{ trans('translation.comarca') }}</label>
                        </div>
                        <div class="col-md-10 col-sm-10">
                            <select class="form-control" name="comarca_id" value="{{ $poblacio->comarca_id }}">
                                @foreach($comarques as $comarca)
                                    @if ($comarca->id == $poblacio->comarca_id)
                                        <option value="{{ $comarca->id }}" selected>{{ $comarca->name }}</option>
                                    @else
                                        <option value="{{ $comarca->id }}">{{ $comarca->name }}</option>
                                    @endif
                                @endforeach
                            </select>
                        </div>
                        <div class="error" id="comarca_id-edit-poblacio-error"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">{{ trans('translation.cancel') }}</button>
                    <button type="submit" class="btn btn-secondary">{{ trans('translation.confirm') }}</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script type="text/javascript" src="{{ asset('js/validators.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/poblacio_edit_validator.js') }}"></script>
<br>
@endsection
