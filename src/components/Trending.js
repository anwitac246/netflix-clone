import React from 'react';
import {Trending} from './TCard';

export const Trend = () => {
    const trendingItems = [
        { title: '1', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRell2q7GkPUQ6t9PvFIlVQ7aK7tq6TM3n6tiCA2Z-8IrJobpWPtg1PNQ56YtOup7efqbrZlvVCC4IovyUIJd-5G_oYeTRbC8WbUio80NPg9D58J5KJ29wATEk1zH5xJptre8Sq1w9qkswMjq82qMgY-uJm6aNNwTNJcuFf7VlDVDL22FQ773Ua9owfOQkxu182R_3HXWYNkX0PDNm2b-6vLYSpIhVNmrZKBYpeWqZBDG2-5cR9bAy1D_EvRNuRLdb9nVotyQ3S73nz9iajdXsoz7Lqd_LGlK25BfmV0CZauaBuxjNVh4qLuACFfv4GBnOQbWIdUqOnOltRMpIZHg2kikhdVZI6i5L-5RVBfI_dUpnvqeQo.jpg?r=cb7' },
        { title: '2', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTTEMh0Zc5BsQ-yXMa5KVG2bkqJn8qo_I5Q9baMsqtH-fcI8sttXX-ipCD7tD5WcQcc0bqlALyVUKnUnnAlXqkACxtWCo0Hvy_7h3RTvvkaNdXtM4dh0i41rUW1U2eqyA44ukaTXA2LDSMX7q5GD7MW-mxk4K9FvbqQ.jpg?r=a57' },
        { title: '3', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUCuqtAzYtjMhxIWJ71lwNAiFVV5I_qghrEBX6WR6oaSaoGET6QeghHenc4qj0lLd_sBwtYvo0cvcej3i-ZSuvGQ_lALIPctjueOMDpXn7m-6-fShX58hHJ6q24l4PHBs_Yj4atUkkEA-QELdJPCuvdyU4yvUYQmZL2iatNXC1SjEDNJiFD6q0doDVBZnnP6YZlThbgiPQkFhwtDKMKN_ml3jKRJa8lJrUVkEjBRoeyAeflqBIC1P9NtXHXMQra-bykGpXQx4-NcEdSRBvUEioacrTmm1BGK59wcKUi-ASBX7Lb3b5CanXK0.jpg?r=488' },
        { title: '4', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWugw5oGUafKIMa-lzfV9M4JDhYAG7yZG2ij6xse4Xw-xu-OssOsbiCjMyhTLxXGTAs7jB6cjC7YJjD7WhDVE4K2HrgvWiUSKf32czK6YGhLzfHZSb-Sp5vjOh8Mr9K25CCtrAiVVEhSm25-3f5V_TdYVdIATeQzBnRHibZ9qRpPh8Nap7LqAEpPws0xzktyFxCPksEUWwIeIVsEMmc7QAxijaFHxNIm_b0FJqW1dexaf7VOKqZ97se_QN2p03P-xaYu_7qAJ99v755CfpCskqcB_OkJ.jpg?r=23c' },
        { title: '5', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABa8ePcb4JOdrSEy-cnYk2B20CauffIYRPJfaZa6VhAscjKE6qYlPhz5RRw3JHaAqEYWuzbSrLDpIeTt8JYZCgRVlIDtiUlsl1nNpjcKixzdfUyanklLNqmVMgC8u6yLiRYrQ0TDc9f5bISCxkfaxxcLdGWX8GWze-a_7E5O2ZlZq0cjUROaMJ3lreYU4N3ZVKJZi_r4bvLsQogY35opVPTbfuQBQhMFF-a_2jc55XrllRHz_3gxvq_HW4Mc_R5TJFnEfL338RDHYMuM9XnWuPjf8ZJbe.jpg?r=3f1' },
        { title: '6', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbsDg7DT9VHP9MWMfZtPUFfwUU95SVmDKlQ6tm5xfyljKbnz4WIMAaxwtj4U4b7bkWeeyITD5nRCjb5XOTY5mRPGBvcayKOjET0-xz5fXaktw64orbOm50Ry0GF-8cFGuimtisnWzbSN0_E-vYRnUATF2ENgz1f-fBSVyJHPC_jFScEddeWDao5U8zxp_Qfm3idtpYp-9WjtT9VyzmWZES3B11Jqw1UCkebD3dpZbt1SFUvdWVYWP-9u8Viixg5c3-UZ_S-xrtjkMZcqpNDZZDJXHvfT.jpg?r=982' },
        { title: '7', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABde4VTZoTfBKOqxcbPJL3PbjtOv2ZmxeDZiHMlcXPNI4PjpDN1tHJhsK7uhk6phG5J0RCkt1dvc4JG6N6nGVWWXfUKscEZ0TzEgstvW880XBGJ4oUenS9vg3laHgfUbimzmNaLZqY_9oY0zTWx-7iJk_kIOL2Gnrvds3Zrxl-kFlVtp51_AlNPbFfEgj7KLHgbfZ79GH3y0xHtUsaspP1Xe3eDyjAb70o0At5P2RrANQ_y04jtyn37C1ftlfQW5sbpNL5zPe41c75b-CoE8SfVLq20KZ.jpg?r=d4c' },
        { title: '8', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeDVybeKwQL37__gX5R3ZJNvXXXwPrg2NpWG3veHY24wodSN8Nunzsattz7vPKJEcu5slVd1FQ-Xwv_SBDtiyW-Jjmr1_Fv3gZs.jpg?r=2b9' },
        { title: '9', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeLaT4K4APQJEBpD1_zpYplqkD_rBM-UeBSWU7VTSnUtbqcWOCPraqZur2mUYnClAAJFCXtZmD0wvjSHjATjdQNGYA2tQolJV3s.jpg?r=bd8' },
        { title: '10', image: 'https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfd0SGG44-ZRRsxsUjqmF8ltjQUe6gj_uAq22-RigBsmsgEhfIhh7nFs8ldiFddXXau_7jPwa_Y4JdczqUJ2giVGbqxtMgHYzfo.jpg?r=65a' }
    ];

    return (
        <div className='trending'>
            
           
            <div className='trending-cards'>
                <Trending items={trendingItems} />
            </div>
        </div>
    );
};


