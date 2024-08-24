<?php

namespace App\Http\Requests\QLDiemDich;

use Illuminate\Foundation\Http\FormRequest;

class CreateFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'kinh_do'=>'required',
            'vi_do'=>'required',
            'dia_chi'=>'required',
            'phuong_xa'=>'required',
            'huyen_tp'=>'required',
            'tinh'=>'required'
        ];
    }
    public function messages(): array
    {
        return [
            'kinh_do.required' => 'Vui lòng nhập kinh_do!',
            'vi_do.required' => 'Vui lòng nhập vi_do!',
            'dia_chi.required' => 'Vui lòng nhập dia_chi!',
            'phuong_xa.required' => 'Vui lòng nhập phuong_xa!',
            'huyen_tp.required' => 'Vui lòng nhập huyen_tp!',
            'tinh.required' => 'Vui lòng nhập tinh!'
            #'body.required' => 'A message is required',
        ];
    }
}
